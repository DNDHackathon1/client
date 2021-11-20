import React from 'react'
import styled from '@emotion/styled'

const Button = () => {
  return (
    <ButtonContainer>
      <Text>참가하기</Text>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button`
  /* text-align: center; */
  width: 113px;
  height: 44px;
  left: 268px;
  top: 450px;
  background: #00071f;
  border-radius: 43px;
  float: right;
  border: none;

  :hover {
    background-color: #a4a4a4;
  }
`

const Text = styled.div`
  text-align: center;
  /* padding-top: 8px; */
  /* width: 67px; */
  height: 27px;
  left: 287px;
  top: 459px;

  color: #ffffff;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
`

export default Button
