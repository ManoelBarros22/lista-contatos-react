import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { RootReducer } from '../../store'
import { Container } from './styles'

const ContactList = () => {
  const contacts = useSelector((state: RootReducer) => state.contacts.items)

  return (
    <Container>
      {contacts.map((c) => (
        <Contact
          key={c.numero}
          id={c.id}
          nome={c.nome}
          email={c.email}
          numero={c.numero}
        />
      ))}
    </Container>
  )
}

export default ContactList
