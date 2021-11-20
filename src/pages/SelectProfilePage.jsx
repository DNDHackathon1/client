import React, { useReducer, useState } from 'react'
import styled from '@emotion/styled'
import Button from '@components/Button'
import Logo from '@assets/logo.png'
import { initialState, reducer } from '../context'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { setProfile } from '../actions'

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
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [image, setImage] = useState('')

  const handleSubmit = () => {
    dispatch(setProfile({ profileImageUrl: image }))
    navigate('/inputTime')
  }

  const buttonClick = (e) => {
    setImage(e.target.src)
  }

  return (
    <ContainerStyled>
      <img width={108} src={Logo} alt="로고" />
      <TitleStyled>나의 캐릭터를 선택해주세요</TitleStyled>
      <ImageContainer>
        <Button2 onClick={buttonClick}>
          <img src="https://ifh.cc/g/ufmY4b.png"></img>
        </Button2>
        <Button2 onClick={buttonClick}>
          <img src="https://ifh.cc/g/zhSTJS.png"></img>
        </Button2>
        <Button2 onClick={buttonClick}>
          <img src="https://ifh.cc/g/Nz0vOu.png"></img>
        </Button2>
        <Button2 onClick={buttonClick}>
          <img src="https://ifh.cc/g/x5DPAV.png"></img>
        </Button2>

        <Button2 onClick={buttonClick}>
          <img src="https://ifh.cc/g/4KvMa0.png"></img>
        </Button2>
      </ImageContainer>
      <Button
        disabled={image.length === 0}
        onSubmit={handleSubmit}
        text="캐릭터 선택완료"
      />
    </ContainerStyled>
  )
}

const Button2 = styled.button`
  background-color: white;
  border: none;
  width: 100px;
  border-radius: 75px;
  height: 100px;

  :hover {
    background-color: black;
  }

  color: #333333;
`

export default SelectProfilePage
