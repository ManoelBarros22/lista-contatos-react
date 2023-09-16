import { styled } from 'styled-components'

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 16px;
  width: 780px;
  color: #fff;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
`

export const NameContact = styled.textarea`
  font-weight: bold;
  resize: none;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  padding-top: 3px;
  height: 27px;
  margin-right: 5px;
`

export const EmailContact = styled.textarea`
  font-weight: bold;
  resize: none;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  padding-top: 3px;
  height: 27px;
  margin-right: 5px;
`

export const NumberContact = styled.textarea`
  font-weight: bold;
  resize: none;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  padding-top: 3px;
  height: 27px;
  margin-right: 5px;
`

export const ContainerButtons = styled.div`
  gap: 5px;
`

export const Button = styled.button`
  padding: 8px 12px;
  color: #fff;
  border: none;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 8px;
`

export const EditButton = styled(Button)`
  background-color: #2f3640;
`

export const RemoveButton = styled(Button)`
  background-color: #c23616;
`

export const SaveButton = styled(Button)`
  background-color: #44bd32;
`
