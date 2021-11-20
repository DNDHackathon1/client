import React from 'react'
import styled from '@emotion/styled'
import { ButtonBase } from '@mui/material'

const ButtonStyled = styled(ButtonBase)`
  background-color: #4f4f4f;
  border-radius: 10px;
  color: #fff;
  width: 80%;
  height: 74px;
  font-size: 24px;
`

const Button = ({ onSubmit = () => {}, text = '' }) => {
  return <ButtonStyled onClick={() => onSubmit()}>{text}</ButtonStyled>
}

export default Button
