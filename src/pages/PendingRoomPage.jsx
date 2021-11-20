import React, { useReducer, useState } from 'react'
import { initialState, reducer } from '../context'
import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'

import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Default from '@assets/default_image.png'
import SubmitCommentSVG from '@assets/submit_comment.svg'
import { InputBase } from '@mui/material'

import Logo from '@assets/logo_white.png'

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 414px;
  width: 100%;
  height: 100%;
  background-color: #1e93ff;
`

const TopContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MiddleContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BottomContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 80%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10%;
  height: 50%;
`

const Title = styled.span`
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  color: #fff;
`

const SubTitle = styled.span`
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #aed8ff;
  white-space: pre-wrap;
  width: 211px;
`

const TimerContainer = styled.div`
  width: 375px;
  height: 87px;
  background: #007ef2;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Timer = styled.span`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 40px;
  color: #ffffff;
`

const UsersContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 31px;
`

const CrueText = styled.span`
  font-size: 18px;
  color: #f2f2f2;
`

const SubmitCommentContainer = styled.div`
  display: flex;
`

const InputContainer = styled.div`
  width: 299px;
  height: 64px;
  background: #f5f5f5;
  border: 1px solid #bbbbbb;
  box-sizing: border-box;
  border-radius: 84px;
  display: flex;
  align-items: center;
  padding-left: 29px;
  padding-right: 29px;
`

const Input = styled(InputBase)`
  font-size: 18px;
  line-height: 27px;
  color: #acacac;
  width: 100%;
`

const ButtonContainer = styled.div`
  width: 64px;
  height: 64px;
  background: #003edc;
  border-radius: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`

const ScrollViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflowy: scroll;
  &:-webkit-scrollbar {
    display: none;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  magin: ;
`

const Comment = styled.span`
  font-size: 18px;
  color: #565656;
`

const PendingRoomPage = () => {
  const [comment, setComment] = useState('')

  const data = [
    {
      id: 0,
    },
  ]

  function handleChange(e) {
    setComment(e.target.value)
  }

  return (
    <ContainerStyled>
      <img src={Logo} alt="로고" />
      <TopContentsContainer>
        <Title>저녁 먹고 유산소</Title>
        <SubTitle>신나는 노래 위주로 들으면서 같이 뛸 분들 와주세요 ~</SubTitle>
      </TopContentsContainer>
      <MiddleContentsContainer>
        <TimerContainer>
          <Timer>19 : 00 ~ 20 : 00</Timer>
        </TimerContainer>
        <UsersContainer>
          <CrueText>크루</CrueText>
          <AvatarGroup max={4}>
            <Avatar alt="Trevor Henderson" src={Default} />
            <Avatar alt="Trevor Henderson" src={Default} />
            <Avatar alt="Trevor Henderson" src={Default} />
            <Avatar alt="Trevor Henderson" src={Default} />
            <Avatar alt="Trevor Henderson" src={Default} />
          </AvatarGroup>
        </UsersContainer>
      </MiddleContentsContainer>
      <BottomContentsContainer>
        <SubmitCommentContainer>
          <InputContainer>
            <Input
              placeholder="대화를 통해 소통할 수 있어요"
              value={comment}
              onChange={(e) => handleChange(e)}
            />
          </InputContainer>
          <ButtonContainer>
            <img src={SubmitCommentSVG} alt="제출 버튼" />
          </ButtonContainer>
        </SubmitCommentContainer>
        <ScrollViewContainer>
          <Item>
            <img widthsrc={Default} alt="프로필" />
            <Comment>안녕하세요~</Comment>
          </Item>
          <Item>
            <img src={Default} alt="프로필" />
            <Comment>안녕하세요~</Comment>
          </Item>
          <Item>
            <img src={Default} alt="프로필" />
            <Comment>안녕하세요~</Comment>
          </Item>
        </ScrollViewContainer>
      </BottomContentsContainer>
    </ContainerStyled>
  )
}

export default PendingRoomPage
