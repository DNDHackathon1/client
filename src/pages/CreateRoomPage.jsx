import React from 'react'
import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'
import Button from '@components/Button'
import Input from '@components/Input'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '@assets/logo.png'
import moment from 'moment'
import { setPartys } from '../actions'
import { useNavigate } from 'react-router'

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-width: 414px;
  width: 100%;
  height: 100%;
  background: #fff;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`

const TitleStyled = styled.span`
  font-weight: bold;
  font-size: 24px;
  width: 50%;
  line-height: 50px;
  white-space: pre-wrap;
  align-self: flex-start;
`

const LabelStyled = styled.label`
  font-size: 24px;
  font-weight: 700;
  align-self: flex-start;
  margin-bottom: 24px;
  margin-top: 54px;
`

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const InputContainer = styled.div`
  display: flex;
`

const TimeInputContainer = styled.div`
  width: 80%;
`

const CreateRoomPage = () => {
  const { user } = useSelector((state) => ({
    user: state.LoginReducer.user,
  }))
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      contents: '',
      endTime: '',
      goalTime: user.goalTime,
      startTime: '',
      title: '',
      userId: user.id,
    },
  })

  async function onSubmit(value) {
    dispatch(
      setPartys({
        party: {
          contents: value.contents,
          endTime: value.endTime,
          goalTime: value.goalTime,
          startTime: value.startTime,
          title: value.title,
          userId: value.userId,
        },
      }),
    )
    navigate('/post')
  }

  return (
    <ContainerStyled>
      <img width={108} src={Logo} alt="로고" />
      <FormStyled>
        <LabelStyled htmlFor="title">제목</LabelStyled>
        <Input
          id="title"
          name="title"
          control={control}
          placeholder="방 제목을 입력해주세요"
          fontSize={24}
        />
        <LabelStyled htmlFor="contents">내용</LabelStyled>
        <Input
          id="contents"
          name="contents"
          control={control}
          placeholder="내용을 입력해주세요."
          fontSize={24}
        />
      </FormStyled>
      <TimeInputContainer>
        <TitleStyled>시간을 설정해주세요</TitleStyled>
        <TextInputContainer>
          <InputContainer>
            <Input
              id="startTime"
              name="startTime"
              control={control}
              placeholder="시작 시간"
              fontSize={24}
            />
            <TitleStyled style={{ marginLeft: 15, marginRight: 50 }}>
              부터
            </TitleStyled>
          </InputContainer>
          <InputContainer>
            <Input
              id="endTime"
              name="endTime"
              control={control}
              placeholder="종료 시간"
              fontSize={24}
            />
            <TitleStyled style={{ marginLeft: 15, marginRight: 50 }}>
              까지
            </TitleStyled>
          </InputContainer>
        </TextInputContainer>
      </TimeInputContainer>
      <Button onSubmit={handleSubmit(onSubmit)} text="방 생성하기" />
    </ContainerStyled>
  )
}

export default CreateRoomPage
