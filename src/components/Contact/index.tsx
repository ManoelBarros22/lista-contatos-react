import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { remove, edit } from '../../store/reducers/contacts'
import ContactClass from '../../models/Contact'

import * as S from './styles'

type Props = ContactClass

const Contact = ({
  nome: originalName,
  email: originalEmail,
  numero: originalNumber,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [nome, setName] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName)
    }

    if (originalEmail.length > 0) {
      setEmail(originalEmail)
    }

    if (originalNumber.length > 0) {
      setNumero(originalNumber)
    }
  }, [originalName, originalEmail, originalNumber])

  function cancelEdition() {
    setIsEditing(false)
    setName(originalName)
    setEmail(originalEmail)
    setNumero(originalNumber)
  }

  return (
    <S.ContactContainer>
      <S.NameContact
        value={nome}
        onChange={(event) => setName(event.target.value)}
        disabled={!isEditing}
      />
      <S.EmailContact
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        disabled={!isEditing}
      />
      <S.NumberContact
        value={numero}
        onChange={(event) => setNumero(event.target.value)}
        disabled={!isEditing}
      />
      <S.ContainerButtons>
        {isEditing ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    id,
                    nome,
                    email,
                    numero
                  })
                )
              }}
            >
              Salvar
            </S.SaveButton>
            <S.RemoveButton onClick={cancelEdition}>Cancelar</S.RemoveButton>
          </>
        ) : (
          <>
            <S.EditButton onClick={() => setIsEditing(true)}>
              Editar
            </S.EditButton>
            <S.RemoveButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.RemoveButton>
          </>
        )}
      </S.ContainerButtons>
    </S.ContactContainer>
  )
}

export default Contact
