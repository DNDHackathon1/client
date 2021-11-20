import React from 'react'
import styled from '@emotion/styled'
import PostList from '@components/PostList'
import Avatar from '@mui/material/Avatar'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Logo from '../images/logo2.png'

const data = [
  {
    title: '런닝 2시간!',
    content: '수다 떨면서 해요!',
    time: '19:00 ~ 20:00',
  },
  {
    title: '쇠질 1시간!',
    content: '소리는 숫자 세는 소리와 비명소리만!',
    time: '19:00 ~ 20:00',
  },
  {
    title: '홈트해요',
    content: '조용한 음악과 함께!',
    time: '19:00 ~ 20:00',
  },
]

const PostPage = () => {
  return (
    <PostPageContainer>
      <Div>
        <img src={Logo} alt="로고"></img>
      </Div>

      <Div>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Div>

      <Div>
        <UserText>
          닉네임님, 목표 2시간
          <p>오늘도 함께 완주 성공해요</p>
        </UserText>
      </Div>

      <Div></Div>

      {data.map(({ title, content, time }) => (
        <PostList title={title} content={content} time={time}></PostList>
      ))}

      <Fab
        aria-label="add"
        style={{ position: 'fixed', bottom: '20%', right: '35%' }}
      >
        <AddIcon />
      </Fab>
    </PostPageContainer>
  )
}

const PostPageContainer = styled.div``

const Div = styled.div`
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
  padding-top: 30px;
`

const UserText = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  /* width: 216px; */
  /* height: 60px; */
  /* left: 99px;
  top: 212px; */

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  text-align: center;

  /* Gray 2 */

  color: #4f4f4f;
`

export default PostPage
