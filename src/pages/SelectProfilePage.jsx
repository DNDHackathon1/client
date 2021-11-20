import React, { useReducer, useState } from 'react'
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
  const [image, setImage] = useState('')

  const handleSubmit = () => {}

  const buttonClick = (e) => {
    setImage(e.target.src)
  }

  return (
    <ContainerStyled>
      <div>로고</div>
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
      <Button onSubmit={handleSubmit} text="캐릭터 선택완료" />
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
