import { HeaderContainer, Img, Button } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Img src="https://www.gstatic.com/images/branding/product/1x/contacts_2022_48dp.png" />
      <Button to="/adicionar">+ Adicionar contato</Button>
    </HeaderContainer>
  )
}

export default Header
