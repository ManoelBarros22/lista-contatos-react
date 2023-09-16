import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
  color: #fff;
  margin-top: 100px;
  margin-bottom: 50px;
`

export const Form = styled.form`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid #eee;
  height: 300px;
`

export const Input = styled.input`
  padding: 8px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #eee;
  outline: none;
  color: #fff;
`

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #44bd32;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  border: none;
  margin-top: 10px;
  border-radius: 6px;
  cursor: pointer;
`
