import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  margin-top: 100px;
  text-align: center;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

export const Img = styled.img`
  height: 50px;
  width: 50px;
`

export const Button = styled(Link)`
  border-radius: 15px;
  background-color: #44bd32;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 8px;
  text-decoration: none;
`
