import React from 'react'
import styled from '@emotion/styled'
import Time from './Time'
import Button from './Button'

const PostList = ({ title, content, time }) => {
  return (
    <PostListContainer>
      <div style={{ paddingTop: '10px', paddingLeft: '20px' }}>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '10px',
        }}
      >
        <Time />
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
  background-color: #e6e6e6;
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

  color: #4f4f4f;
`

export default PostList
