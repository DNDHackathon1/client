import React from 'react'
import styled from '@emotion/styled'
import { ButtonBase } from '@mui/material'

const ButtonStyled = styled(ButtonBase)`
  background-color: #4f4f4f;
  border-radius: 10px;
  color: #fff;
  width: 90%;
  height: 66px;
  font-size: 24px;
`

const Button = ({ onSubmit = () => {}, text = '', disabled }) => {
  return (
    <ButtonStyled
      style={
        disabled
          ? { backgroundColor: '#BDBDBD' }
          : { backgroundColor: '#003EDC' }
      }
      disabled={disabled}
      onClick={() => onSubmit()}
    >
      {text}
    </ButtonStyled>
  )
}

export default Button
