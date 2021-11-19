import React from 'react'
import styled from '@emotion/styled'
import Time from '@components/PostList/Time'
import Logo from '../images/logo.png'
const RunningPage = () => {
  return (
    <>
      <RunningPageContainer>
        <Div>
          <img src={Logo}></img>
        </Div>

        <Div>
          <Time color="white" fontSize="40px" />
        </Div>

        <Div>
          <ImageContainer></ImageContainer>
        </Div>

        <Div>
          <Text>현재 13명의 크루와 함께 달리고 있어요</Text>
        </Div>

        <Div>
          <Button>그만 달리기</Button>
        </Div>
      </RunningPageContainer>
    </>
  )
}

const RunningPageContainer = styled.div`
  width: 414px;
  height: 1080px;
  left: 753px;
  top: 0px;
  background-color: #0030ad;

  color: white;
  /* background-color: black; */
`
const Button = styled.button`
  width: 375px;
  height: 66px;
  left: 773px;
  top: 806px;
  border: none;
  background: #000d2e;
  border-radius: 15px;
  color: white;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;

  :hover {
    background-color: #1b1b1b;
  }
`

const Text = styled.div`
  width: 300px;
  /* height: 72px; */
  /* left: 860px; */
  /* top: 645px; */
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  text-align: center;

  color: #ffffff;
`

const Div = styled.div`
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  padding-top: 30px;
`

const ImageContainer = styled.div`
  /* padding-top: 50px; */
  width: 337px;
  height: 328px;
  left: 792px;
  /* top: 281px; */
  background: #f0f0f0;
`

export default RunningPage
