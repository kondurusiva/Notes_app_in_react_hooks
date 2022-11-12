import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const TitleInput = styled.input`
  border-width: 0px;
  outline: none;
`
export const NoteInput = styled.textarea`
  margin-top: 10px;
  margin-bottom: 10px;
  border-width: 0px;
  outline: none;
`
export const AddButton = styled.button`
  margin-left: auto;
  background-color: #4c63b6;
  border-width: 0px;
  color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 8px;
  font-family: 'Roboto';
`
export const Heading = styled.h1`
  text-align: center;
  font-family: 'Bree Serif';
  color: #4c63b6;
`
export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 200px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 2px #d8d8d8;
`
export const BottomContainer = styled.div`
  margin-left: 350px;
`
export const NewContainer = styled.div``

export const BulbContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`
export const BulbImage = styled.img`
  background-size: cover;
  height: 100px;
  width: 100px;
`
export const BulbHeading = styled.h1`
  color: #475569;
  font-family: 'Roboto';
`
export const BulbDescription = styled.p`
  font-family: 'Roboto';
  color: #d8d8d8;
`

export const NewList = styled.ul``
