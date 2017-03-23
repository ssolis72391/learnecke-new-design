These Components are used to make MUI UI components able to use React Beautiful DND easily

Key items to understand

Droppable(handleDragEnd) requires 1 argument, a function that impliments updating the list state to reorder the dragged item

Draggable(id, index) requires 2 arguments, a unique id of type string and the index a whole number indicating the original index of the item with in the list.

See example below:

'''
// imports
import {
  Box,
} from '@mui/material'

import {
  Draggable,
  Droppable,
} from 'components';

//dataProp is of type { "list": [{ "id": "string", "title": "string"}, ] }
const DragAndDropExample = ({ dataProp }) => {
  // assumes the following variable and type in the host component
  [data, setData] = useState(dataProp)

  // example handle drag end function
  const handleDragEnd = (result) => {
    // this line prevents dropping something out of the droppable area if there is no valid destination.
    if (!result.destination) return;

    // create temp list
    let items = Array.from(data.list);
    // extract moved list item
    const [reorderedItem] = items.splice(result.source.index, 1);
    // handle special case of moving to the start of the list
    if (result.destination.index < 1) {
      items = [reorderedItem, ...items]
    } else {
      // insert moved at the destination index and remove 0 items at that index
      items.splice(result.destination.index, 0, reorderedItem);
    }

    setData({ ...data, list: items });
  }

// NOTE: each item.id has to be a unique and of type STRING
  return (
    <Box component={Droppable(handleDragEnd)}>
      {list.map((item, index) => {
          return (
            <Box component={Draggable(item.id, index)}>
              <span>{item.title}</span>
            </Box>
          )
      }
    </Box>
  )
}
'''