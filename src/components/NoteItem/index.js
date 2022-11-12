// Write your code here
import {ListItems, NoteName, NoteDescription} from './styledComponents'

const NoteItem = props => {
  const {ItemDetails} = props
  const {title, notes} = ItemDetails
  return (
    <ListItems>
      <NoteName>{title}</NoteName>
      <NoteDescription>{notes}</NoteDescription>
    </ListItems>
  )
}

export default NoteItem
