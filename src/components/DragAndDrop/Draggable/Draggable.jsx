import { Draggable } from 'react-beautiful-dnd';

// const DraggableComponent = (id: string, index: number) => (props: any) => {
const DraggableComponent = (id, index) => (props) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            {...props}
          >
            {props.children({
              isDragging: snapshot.isDragging,
            })}
          </div>
        );
      }}
    </Draggable>
  );
};

export default DraggableComponent;
