import React, { useReducer } from 'react'
import { initialState, reducer } from '../context'
import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'
import Button from '@components/Button'
import Input from '@components/Input'

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

const TitleStyled = styled.span`
  font-weight: bold;
  font-size: 32px;
  width: 50%;
  line-height: 50px;
  white-space: pre-wrap;
`

const InputContainer = styled.div`
  width: 50%;
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
      <div>로고</div>
      <TitleStyled>하루에 몇시간을 달려볼까요?</TitleStyled>
      <InputContainer>
        <Input name="time" control={control} placeholder="시간" />
      </InputContainer>
      <Button onSubmit={handleSubmit(onSubmit)} text="캐릭터 선택완료" />
    </ContainerStyled>
  )
}

export default InputTimePage
