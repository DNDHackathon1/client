import React, { useReducer } from 'react'
import { initialState, reducer } from '../context'
import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'
import Input from '@components/Input'
import Button from '@components/Button'
import reset from 'emotion-reset'

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 414px;
  margin-top: 30px;
  width: 100%;
  height: 80%;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`

const LabelStyled = styled.label`
  font-size: 24px;
  font-weight: 700;
  align-self: flex-start;
  margin-bottom: 24px;
  margin-top: 54px;
`

const SignInPage = () => {
  const [{ user }, dispatch] = useReducer(reducer, initialState)

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      userId: '',
      nickname: '',
      password: '',
    },
  })

  console.log(errors)

  function onSubmit(value) {
    console.log(value)

    reset()
    // 회원가입 submit function ( axios ) POST
  }

  // () => dispatch(
  //     {
  //         type : "CREATE_USER",
  //         user : { nickname : '노아' }
  //     })

  return (
    <ContainerStyled>
      <FormStyled>
        <LabelStyled htmlFor="userId">아이디</LabelStyled>
        <Input
          id="userId"
          name="userId"
          control={control}
          placeholder="아이디를 입력해주세요."
        />
        <LabelStyled htmlFor="password">비밀번호</LabelStyled>
        <Input
          id="password"
          name="password"
          control={control}
          placeholder="비밀번호를 입력해주세요."
        />
      </FormStyled>
      <Button onSubmit={handleSubmit(onSubmit)} text="로그인" />
    </ContainerStyled>
  )
}

export default SignInPage
