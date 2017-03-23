import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// const DroppableComponent = (onDragEnd: (result: DropResult, provided: ResponderProvided) => void) => (props: any) => {
//       <Droppable droppableId={'1'} direction='horizontal'>
const DroppableComponent = (onDragEnd, onDragStart) => (props) => {
  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Droppable droppableId='1' direction='vertical'>
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              {...props}
            >
              {props.children}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default DroppableComponent;
