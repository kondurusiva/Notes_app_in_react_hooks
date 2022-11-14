import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  Heading,
  TitleInput,
  NoteInput,
  AddButton,
  FormContainer,
  SubContainer,
  BottomContainer,
  BulbContainer,
  BulbImage,
  BulbHeading,
  BulbDescription,
  NewList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [items, setItems] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNotes = event => {
    setNotes(event.target.value)
  }

  const onAdd = event => {
    event.preventDefault()
    const newObject = {
      id: uuidv4(),
      title,
      notes,
    }
    setItems(prevState => [...prevState, newObject])
    setTitle('')
    setNotes('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <SubContainer>
        <FormContainer onSubmit={onAdd}>
          <TitleInput
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <NoteInput
            type="textarea"
            placeholder="Take a Note..."
            row={5}
            col={5}
            value={notes}
            onChange={onChangeNotes}
          />
          <AddButton type="submit">Add</AddButton>
        </FormContainer>
      </SubContainer>
      <BottomContainer>
        {items.length === 0 ? (
          <BulbContainer>
            <BulbImage
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <BulbHeading>No Notes Yet</BulbHeading>
            <BulbDescription>Notes you add will appear here</BulbDescription>
          </BulbContainer>
        ) : (
            <NewList>{items.map(eachItem => (
              <NoteItem key={eachItem.id} ItemDetails={eachItem} />))}
            </NewList>)}
      </BottomContainer>
    </MainContainer>
  )
}

export default Notes
