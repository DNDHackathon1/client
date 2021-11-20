import React, { useReducer } from 'react'
import { initialState, reducer } from '../context'
import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'
import Button from '@components/Button'

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

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 300px;
  height: 300px;
`

const SelectProfilePage = () => {
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
      <div>로고</div>
      <TitleStyled>나의 캐릭터를 선택해주세요</TitleStyled>
      <ImageContainer>
        <div
          style={{
            background: '#DFDFDF',
            width: 100,
            borderRadius: 75,
            height: 100,
          }}
        ></div>
        <div
          style={{
            background: '#DFDFDF',
            width: 100,
            borderRadius: 75,
            height: 100,
          }}
        ></div>
        <div
          style={{
            background: '#DFDFDF',
            width: 100,
            borderRadius: 75,
            height: 100,
          }}
        ></div>
        <div
          style={{
            background: '#DFDFDF',
            width: 100,
            borderRadius: 75,
            height: 100,
          }}
        ></div>
        <div
          style={{
            background: '#DFDFDF',
            width: 100,
            borderRadius: 75,
            height: 100,
          }}
        ></div>
      </ImageContainer>
      <Button onSubmit={handleSubmit(onSubmit)} text="캐릭터 선택완료" />
    </ContainerStyled>
  )
}

export default SelectProfilePage
