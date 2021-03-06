import React, { useReducer } from 'react'
import { initialState, reducer, UserDispatch } from '../context'
import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'
import Input from '@components/SignInInput'
import Button from '@components/Button'
import Logo from '@assets/logo.png'
import ErrorText from '@components/ErrorText'
import { signInPost } from '../apis/api/user'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setGoalTime, setProfile, setUserInfo } from '../actions'

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

const SignInPage = () => {
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
      password: '',
    },
  })

  async function onSubmit(value) {
    console.log(value)
    const {
      data: { data },
    } = await axios({
      method: 'post',
      url: 'http://ec2-3-36-132-160.ap-northeast-2.compute.amazonaws.com:8080/api/users/signin',
      data: {
        identity: value.identity,
        password: value.password,
      },
    })

    navigate('/post')

    dispatch(
      setUserInfo({
        identity: data.identity,
        password: '',
        nickname: data.nickname,
        id: data.userId,
      }),
    )

    dispatch(setProfile({ profileImageUrl: data.profileImageUrl }))
    dispatch(setGoalTime({ goalTime: data.goalTime }))

    // ???????????? submit function ( axios ) POST
  }

  return (
    <ContainerStyled>
      <img width={108} src={Logo} alt="??????" />
      <FormStyled>
        <LabelStyled htmlFor="identity">?????????</LabelStyled>
        <Input
          id="identity"
          name="identity"
          control={control}
          register={register}
          placeholder="???????????? ??????????????????."
        />
        {errors.identity ? <ErrorText error={errors.identity.message} /> : null}
        <LabelStyled htmlFor="password">????????????</LabelStyled>
        <Input
          id="password"
          name="password"
          type="password"
          control={control}
          register={register}
          placeholder="??????????????? ??????????????????."
        />
        {errors.password ? <ErrorText error={errors.password.message} /> : null}
      </FormStyled>
      <Link
        to="/post"
        style={{
          textDecorationLine: 'none',
          color: '#0042c1',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          disabled={!isValid}
          onSubmit={handleSubmit(onSubmit)}
          text="?????????"
        />
      </Link>
    </ContainerStyled>
  )
}

export default SignInPage
