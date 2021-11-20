import React from 'react'
import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'
import Button from '@components/Button'
import Input from '@components/Input'
import Logo from '@assets/logo.png'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setGoalTime } from '../actions'
import { useSelector } from 'react-redux'
import { signUpPost } from '../apis/api/user'
import axios from 'axios'

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
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => ({
    user: state.LoginReducer.user,
  }))

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    mode: 'all',
    defaultValues: {
      goalTime: '',
    },
  })

  async function onSubmit({ goalTime }) {
    dispatch(setGoalTime({ goalTime: Number(goalTime) }))
    const { data } = await axios({
      method: 'post',
      url: 'http://ec2-3-36-132-160.ap-northeast-2.compute.amazonaws.com:8080/api/users/signup',
      data: {
        ...user,
        goalTime: Number(goalTime),
      },
    })

    navigate('/signin', { data })
  }

  return (
    <ContainerStyled>
      <img width={108} src={Logo} alt="로고" />
      <TitleStyled>하루에 몇시간을 달려볼까요?</TitleStyled>
      <InputContainer>
        <Input
          id="goalTime"
          name="goalTime"
          control={control}
          placeholder="목표 시간을 알려주세요"
          fontSize={24}
        />
      </InputContainer>
      <Button
        disabled={!isValid}
        onSubmit={handleSubmit(onSubmit)}
        text="목표 선택완료"
      />
    </ContainerStyled>
  )
}

export default InputTimePage
