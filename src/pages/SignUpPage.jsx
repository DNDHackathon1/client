import React from 'react'
import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'
import Input from '@components/SignUpInput'
import Button from '@components/Button'
import Logo from '@assets/logo.png'
import ErrorText from '@components/ErrorText'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../actions'

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 414px;
  width: 100%;
  height: 100%;
  background: #fff;
  padding-top: 52px;
`

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 40%;
`

const LabelStyled = styled.label`
  font-size: 24px;
  font-weight: 700;
  align-self: flex-start;
  margin-bottom: 24px;
  margin-top: 54px;
  color: #003edc;
`

const SignUpPage = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: {
      identity: '',
      nickname: '',
      password: '',
    },
  })

  function onSubmit({ identity, nickname, password }) {
    dispatch(setUserInfo({ identity, nickname, password }))
    navigate('/selectProfile')
    reset()
  }

  return (
    <ContainerStyled>
      <img width={108} src={Logo} alt="로고" />
      <FormStyled>
        <LabelStyled htmlFor="identity">아이디</LabelStyled>
        <Input
          id="identity"
          name="identity"
          control={control}
          register={register}
          placeholder="아이디를 입력해주세요."
        />
        {errors.identity ? <ErrorText error={errors.identity.message} /> : null}
        <LabelStyled htmlFor="nickname">닉네임</LabelStyled>
        <Input
          id="nickname"
          name="nickname"
          control={control}
          register={register}
          placeholder="닉네임을 입력해주세요."
        />
        {errors.nickname ? <ErrorText error={errors.nickname.message} /> : null}
        <LabelStyled htmlFor="password">비밀번호</LabelStyled>
        <Input
          id="password"
          type="password"
          name="password"
          control={control}
          register={register}
          placeholder="비밀번호를 입력해주세요."
        />
        {errors.password ? <ErrorText error={errors.password.message} /> : null}
      </FormStyled>
      <Button
        disabled={!isValid}
        onSubmit={() => {
          handleSubmit(onSubmit)()
          navigate('/selectProfile')
        }}
        text="회원가입 완료"
      />
    </ContainerStyled>
  )
}

export default SignUpPage
