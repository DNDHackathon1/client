import React from 'react'
import styled from '@emotion/styled'
import Time from './Time'
import Button from './Button'
import { useNavigate } from 'react-router'

const PostList = ({ title, contents, startTime, endTime }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/running', { startTime, endTime })
  }

  return (
    <PostListContainer onClick={() => handleClick()}>
      <div style={{ paddingTop: '10px', paddingLeft: '20px' }}>
        <Title>{title}</Title>
        <Content>{contents}</Content>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '10px',
        }}
      >
        <Time color={'#0000F5'} startTime={startTime} endTime={endTime} />
        <Button />
      </div>
    </PostListContainer>
  )
}

const PostListContainer = styled.div`
  margin-top: 10px;
  width: 375px;
  height: 145px;
  left: 20px;
  top: 365px;
  /* background-color: #e6e6e6; */
  border-radius: 10px;

  background: #ffffff;
  border: 1.5px solid #f8f8f9;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px rgba(160, 160, 160, 0.5);
  border-radius: 10px;
`
const Content = styled.div`
  /* position: absolute; */
  /* width: 67px; */
  /* height: 27px; */
  /* left: 41px; */
  /* top: 424px; */
  padding-top: 10px;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  /* Gray 2 */

  color: #4f4f4f;
`

const Title = styled.div`
  //position: absolute;
  width: 160px;
  height: 33px;
  left: 41px;
  top: 391px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  /* identical to box height */

  /* Gray 2 */

  color: #333333;
`

export default PostList
