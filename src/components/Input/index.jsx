import React from 'react'
import styled from '@emotion/styled'
import { Controller } from 'react-hook-form'
import { InputBase } from '@mui/material'

const InputStyled = styled(InputBase)`
  border: none;
  border-bottom: 3px solid #c4c4c4;
  font-size: 16px;
  &:focus {
    outline: 0;
  }
  width: 100%;
`

const Input = ({ name, control, placeholder, fontSize = 16, register }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <InputStyled
          style={{ fontSize: fontSize }}
          placeholder={placeholder}
          inputRef={register}
          {...field}
        />
      )}
    />
  )
}

export default Input
