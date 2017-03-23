import { useState, useContext } from 'react';
import { Box, Button, Card, CardHeader, TextField, CardContent, IconButton, Typography } from '@mui/material';

// import EmptyLesson from 'components/EmptyLesson';
import { Draggable, Droppable, InsertDivider, ActivityCard } from 'components';

import { ReactComponent as EditIcon } from 'assets/Icons/streamline-icon-pencil-1@48x48.svg';
import { ReactComponent as BackIcon } from 'assets/Icons/streamline-arrow-circle-left--arrows-diagrams--48x48.svg';

import { Structures } from 'structures/structures';

import { GlobalContext } from 'stores/globalStore';

import useStyles from './DesignCardStyles';

const exampleCourse = require('utils/TestData/exampleCourse.json');

const CourseDesign = function ({ index }) {
  const classes = useStyles();
  const { store, dispatch } = useContext(GlobalContext);
  const [parentObject, setParentObject] = useState([]);
  const [data, setData] = useState(store.courses[parseInt(index)]);
  const [type, setType] = useState(data.itemType || 'Discussion');
  const [edit, toggelEditing] = useState(data.editing !== undefined ? data.editing : true);
  const [title, setTitle] = useState(data.title || 'Lesson Title');
  const [description, setdescription] = useState(data.description || 'Lesson Summary');
  const cardTypes = Structures[data.itemType || 'Course'].subItemTypes;

  // TODO: prevent Dividers from showing while Items are being dragged
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
    items.splice(index, 0, { id: `NEW-ADDED-${data.subSections.length + 100}`, editing: true }); // TODO: need to get a better unique id will break once delete functionality exists
    setData({ ...data, subSections: items });
  };

  // // TODO: get working to support disabling add icons while dragging an item
  // const handleDrag = () => {
  //   setDragging(true)
  // }

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
    <Card className={classes.designCard}>
      <CardHeader
        title={
          <Box className={classes.header}>
            <Typography variant='h1'>
              {parentObject.length > 0 && (
                <IconButton flexItem onClick={handleReturnToParent}>
                  <BackIcon alt='return' height='24' width='24' />
                </IconButton>
              )}
              {`New ${data.itemType}`}
            </Typography>
          </Box>
        }
        action={
          <IconButton
            onClick={() => {
              toggelEditing(!edit);
            }}
          >
            <EditIcon alt='Edit' height='16' width='16' />
          </IconButton>
        }
      />
      <CardContent>
        <Box>
          <TextField
            disabled={!edit}
            label='Title'
            type='text'
            value={title}
            fullWidth
            variant='standard'
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            multiline
            disabled={!edit}
            label='description'
            type='text'
            value={description}
            fullWidth
            variant='standard'
            onChange={(e) => setdescription(e.target.value)}
          />
        </Box>
        <Box marginTop='15px' component={Droppable(handleDragEnd)}>
          {data.subSections &&
            data.subSections.length > 0 &&
            data.subSections.map((item, index) => {
              const cardProps = {
                dataProp: { id: `content ${item.sectionNum}`, itemType: 'Content', ...item },
                cardTypes,
                index,
                handleChange,
                openMe: () => {
                  setParentObject([...parentObject, data]);
                  setData(item);
                },
              };
              if (index > 0) {
                cardProps.onMoveUp = () => handleDragEnd({ source: { index }, destination: { index: index - 1 } });
                cardProps.onMoveTop = () => handleDragEnd({ source: { index }, destination: { index: 0 } });
              }
              if (index < data.subSections.length - 1) {
                cardProps.onMoveDown = () => handleDragEnd({ source: { index }, destination: { index: index + 1 } });
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
      </CardContent>
    </Card>
  );
};

// // const DroppableComponent = (onDragEnd: (result: DropResult, provided: ResponderProvided) => void) => (props: any) => {
// //       <Droppable droppableId={'1'} direction='horizontal'>
// const DroppableComponent = (onDragEnd) => (props) => {
//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId='1' direction='vertical'>
//         {(provided) => {
//           return (
//             <div ref={provided.innerRef} {...provided.droppableProps} {...props}>
//               {props.children}
//               {provided.placeholder}
//             </div>
//           );
//         }}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// // const DraggableComponent = (id: string, index: number) => (props: any) => {
// const DraggableComponent = (id, index) => (props) => {
//   return (
//     <Draggable draggableId={id} index={index}>
//       {(provided, snapshot) => {
//         return (
//           <div
//             ref={provided.innerRef}
//             {...provided.draggableProps}
//             {...provided.dragHandleProps}
//             {...props}
//           >
//             {props.children}
//           </div>
//         )
//       }}
//     </Draggable>
//   );
// };

export default CourseDesign;
