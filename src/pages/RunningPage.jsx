import React, { useState } from 'react'
import styled from '@emotion/styled'
import Time from '@components/PostList/Time'
import Logo from '../images/logo.png'
import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useRoutes } from 'react-router'
import { Link } from 'react-router-dom'

const RunningPage = () => {
  const { params } = useRoutes()

  const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '375px',
    height: '247px',
    bgcolor: 'background.paper',

    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleMain = () => {}

  return (
    <>
      <RunningPageContainer>
        <Div>
          <img src={Logo} />
        </Div>

        <Div>
          <Time
            color="white"
            fontSize="40px"
            startTime={params?.startTime}
            endTime={params?.endTime}
          />
        </Div>

        <Div>
          <img src="https://ifh.cc/g/GKsMUZ.gif" style={{ width: '80%' }}></img>
        </Div>

        <Div>
          <Text>현재 13명의 크루와 함께 달리고 있어요</Text>
        </Div>

        <Div>
          <Button onClick={handleOpen}>그만 달리기</Button>
        </Div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <ModalText>그만 달리시겠어요?</ModalText>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Div>
                <ModalButton onClick={handleClose}>계속 달리기</ModalButton>

                <Link to="/post">
                  <ModalButton2 onClick={handleMain}>나가기</ModalButton2>
                </Link>
              </Div>
            </Typography>
          </Box>
        </Modal>
      </RunningPageContainer>
    </>
  )
}

// const Modal = styled.div`
//   background-color: rgba(0, 0, 0, 0.5);

//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: 9;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   div {
//     margin-bottom: 50%;
//     width: 375px;
//     height: 247px;
//     /* left: 773px;
//     top: 334px; */
//     color: #4f4f4f;
//     border-radius: 20px;

//     background-color: #ffffff;
//     box-sizing: border-box;
//     /* padding: 20px; */
//     /* height: 80%; */
//     /* width: 80%; */
//     button.close {
//       float: right;
//     }
//   }
// `
const ModalButton = styled.button`
  width: 167px;
  height: 68px;
  /* left: 787px;
  top: 497px; */
  margin-bottom: 200px;
  background: #ccdaff;
  border-radius: 10px;
  border: none;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  margin-top: 50px;
  text-align: center;
  color: #0030ad;
`
const ModalButton2 = styled.button`
  width: 167px;
  height: 68px;
  /* left: 787px;
  top: 497px; */
  margin-bottom: 200px;
  background: #0030ad;
  border-radius: 10px;
  border: none;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  margin-top: 50px;
  text-align: center;
  color: #f2f2f2;

  margin-left: 20px;
`

const ModalText = styled.div`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;

  display: flex;
  justify-content: center;
  padding-top: 40px;
`

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
