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

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
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
  const [{ user }, dispatch] = useReducer(reducer, initialState)

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      title: '',
      subTitle: '',
      startTime: '',
      endTime: '',
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
      <FormStyled>
        <LabelStyled htmlFor="userId">제목</LabelStyled>
        <Input
          id="userId"
          name="userId"
          control={control}
          placeholder="방 제목을 입력해주세요"
          fontSize={24}
        />
        <LabelStyled htmlFor="password">내용</LabelStyled>
        <Input
          id="password"
          name="password"
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
      <Button onSubmit={handleSubmit(onSubmit)} text="캐릭터 선택완료" />
    </ContainerStyled>
  )
}

export default CreateRoomPage
