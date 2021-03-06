import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import Logo from '@assets/logo_white.png'
import JustDo from '@assets/justdo.png'
import { useNavigate } from 'react-router'
import { flexbox } from '@mui/system'

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 414px;
  width: 100%;
  height: 100%;
  background: #000;
  padding-top: 52px;
`

const Comment = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 44px;
  color: #fff;
  margin-top: 30px;
`

const SplashPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/signup')
    }, 5000)
  }, [navigate])

  return (
    <ContainerStyled>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <img
          style={{ width: 350, alignSelf: 'flex-start' }}
          src="https://ifh.cc/g/hjDsqI.gif"
          alt="그냥해"
        />
      </div>
      <Comment>함께 달리는 즐거움</Comment>
    </ContainerStyled>
  )
}

export default SplashPage
