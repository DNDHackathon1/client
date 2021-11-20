import React from 'react'
import styled from '@emotion/styled'
import PostList from '@components/PostList'
import Avatar from '@mui/material/Avatar'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import Logo from '../images/logo2.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
  const { partyGroup } = useSelector((state) => ({
    partyGroup: state.LoginReducer.partyGroup,
  }))
  const createRoomButton = () => {}

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
          minsu님, 목표 2시간
          <p>오늘도 함께 완주 성공해요</p>
        </UserText>
      </Div>

      <Link
        to="/createRoom"
        style={{ textDecorationLine: 'none', color: '#0042c1' }}
      >
        <CreateRoomButton onClick={createRoomButton}>
          방 만들기
        </CreateRoomButton>
      </Link>

      {partyGroup.map(({ title, contents, startTime, endTime }) => (
        <PostList
          key={title}
          title={title}
          content={contents}
          startTime={startTime}
          endTime={endTime}
        ></PostList>
      ))}
    </PostPageContainer>
  )
}

const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 414px;
  width: 100%;
  height: 100%;
  background: #fff;
  padding-top: 52px;
`

const CreateRoomButton = styled.button`
  width: 375px;
  height: 73px;
  left: 773px;
  top: 374px;

  background: #f2f6ff;
  border: 1px solid #81acff;
  box-sizing: border-box;
  border-radius: 10px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #0042c1;

  :hover {
    background-color: #bdcdf1;
  }
`
const CreateRoomText = styled.div`
  /* width: 71px;
  height: 27px; */
  left: 907px;
  top: 397px;

  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #0042c1;
`

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
