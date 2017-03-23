import { Box, Stack } from '@mui/material';
import { ActivityCard, Draggable, Droppable, InsertDivider } from 'components';
import { useState } from 'react';
import { Structures } from 'structures/structures';

const exampleCoursesList = require('utils/TestData/exampleCoursesList.json');

const LessonCardList = function () {
  const [data, setData] = useState(exampleCoursesList.courses[0]);
  const [parentObject, setParentObject] = useState([]);
  const cardTypes = Structures.Course.subItemTypes;

  const [dragging, setDragging] = useState(false);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    let items = Array.from(data.subSections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    if (result.destination.index < 1) {
      items = [reorderedItem, ...items];
    } else {
      items.splice(result.destination.index, 0, reorderedItem);
    }

    setDragging(false);
    setData({ ...data, subSections: items });
  };

  const handleAddActivity = (index) => {
    const items = Array.from(data.subSections);
    items.splice(index, 0, {
      id: `NEW-ADDED-${data.subSections.length + 100}`,
      editing: true,
    }); // TODO: need to get a better unique id will break once delete functionality exists
    setData({ ...data, subSections: items });
  };

  // // TODO: get working to support disabling add icons while dragging an item
  const handleDragStart = () => {};

  const handleChange = (e) => {
    const { index, name, value } = e.target ? e.target : e;
    const items = Array.from(data.subSections);
    items[index] = { ...items[index], [name]: value };
    setData({ ...data, subSections: items });
  };

  const handleReturnToParent = () => {
    const parentsList = Array.from(parentObject);
    const parent = parentsList.pop();
    setData(parent);
    setParentObject(parentsList);
  };

  return (
    <Stack mt={6} p={2} pt={0.5} border='1px solid rgba(41, 46, 53, 0.38)'>
      <Box component={Droppable(handleDragEnd, handleDragStart)}>
        {data.subSections &&
          data.subSections.length > 0 &&
          data.subSections.map((item, index) => {
            const cardProps = {
              dataProp: {
                id: `content ${item.sectionNum}`,
                itemType: 'Content',
                ...item,
              },
              cardTypes,
              index,
              handleChange,
              openMe: () => {
                setParentObject([...parentObject, data]);
                setData(item);
              },
              dragging,
            };
            if (index > 0) {
              cardProps.onMoveUp = () =>
                handleDragEnd({
                  source: { index },
                  destination: { index: index - 1 },
                });
              cardProps.onMoveTop = () =>
                handleDragEnd({
                  source: { index },
                  destination: { index: 0 },
                });
            }
            if (index < data.subSections.length - 1) {
              cardProps.onMoveDown = () =>
                handleDragEnd({
                  source: { index },
                  destination: { index: index + 1 },
                });
              cardProps.onMoveBottom = () =>
                handleDragEnd({
                  source: { index },
                  destination: { index: data.subSections.length - 1 },
                });
            }

            return (
              <div key={index}>
                <Box>
                  <InsertDivider onClick={() => handleAddActivity(index)} />
                </Box>
                <Box component={Draggable(item.id, index, /* handleDrag = */ () => {})} key={item.id}>
                  {({ isDragging }) => <ActivityCard {...cardProps} isDragging={isDragging} />}
                </Box>
              </div>
            );
          })}
        {data.subSections && data.subSections.length > 0 ? (
          <InsertDivider
            onClick={() =>
              setData({
                ...data,
                subSections: [...data.subSections, { id: `NEW-${data.subSections.length}`, editing: true }],
              })
            }
          />
        ) : (
          <div>Empty Lesson </div>
        )}
      </Box>
    </Stack>
  );
};

export default LessonCardList;
