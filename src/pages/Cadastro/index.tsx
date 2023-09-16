import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Contact from '../../models/Contact'
import { add } from '../../store/reducers/contacts'

import * as S from './styles'

const Cadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [numeroContato, setNumeroContato] = useState('')

  function registerContact(event: FormEvent) {
    event.preventDefault()

    const contactToAdd = new Contact(name, email, numeroContato, 13)

    dispatch(add(contactToAdd))
    navigate('/')
  }

  return (
    <>
      <S.Title>Adicionar contato</S.Title>
      <S.Form onSubmit={registerContact}>
        <S.Input
          placeholder="Digite um nome"
          onChange={(event) => setName(event.target.value)}
        />
        <S.Input
          placeholder="Digite um email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <S.Input
          placeholder="Digite um telefone"
          onChange={(event) => setNumeroContato(event.target.value)}
        />
        <S.Button>Cadastrar</S.Button>
      </S.Form>
    </>
  )
}

export default Cadastro
