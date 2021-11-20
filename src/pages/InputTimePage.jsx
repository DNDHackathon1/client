import React, { useReducer } from 'react'
import { initialState, reducer } from '../context'
import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'
import Button from '@components/Button'
import Input from '@components/Input'
import Logo from '@assets/logo.png'

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 414px;
  width: 100%;
  height: 100%;
  background-color: #fff;
`

const TitleStyled = styled.span`
  font-weight: bold;
  font-size: 32px;
  width: 50%;
  line-height: 50px;
  white-space: pre-wrap;
  align-self: flex-start;
  margin: 5%;
`

const InputContainer = styled.div`
  align-self: flex-start;
  width: 90%;
  margin: 5%;
`

const InputTimePage = () => {
  const [{ user }, dispatch] = useReducer(reducer, initialState)

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      time: '',
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
      <img width={108} src={Logo} alt="로고" />
      <TitleStyled>하루에 몇시간을 달려볼까요?</TitleStyled>
      <InputContainer>
        <Input
          name="time"
          control={control}
          placeholder="목표 시간을 알려주세요"
          fontSize={24}
        />
      </InputContainer>
      <Button onSubmit={handleSubmit(onSubmit)} text="목표 선택완료" />
    </ContainerStyled>
  )
}

export default InputTimePage
