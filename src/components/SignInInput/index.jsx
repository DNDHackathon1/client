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

const Input = ({
  name,
  control,
  register,
  placeholder,
  fontSize = 16,
  type = 'input',
}) => {
  const identityRegister = register('identity', {
    required: '아이디를 입력해주세요.',
    minLength: {
      value: 1,
      message: '아이디를 입력해주세요.',
    },
  })

  const passwordRegister = register('password', {
    required: '비밀번호를 입력해주세요.',
    minLength: {
      value: 1,
      message: '비밀번호를 입력해주세요.',
    },
  })

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <InputStyled
          style={{ fontSize: fontSize }}
          placeholder={placeholder}
          type={type}
          inputRef={
            name === 'identity'
              ? identityRegister
              : name === 'password'
              ? passwordRegister
              : register
          }
          {...field}
        />
      )}
    />
  )
}

export default Input
