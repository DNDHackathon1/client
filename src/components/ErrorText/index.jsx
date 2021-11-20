import React from 'react'
import styled from '@emotion/styled'

const TextStyled = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ff4b4b;
  align-self: flex-start;
  margin-top: 10px;
`

const ErrorText = ({ error }) => {
  return <TextStyled>{error}</TextStyled>
}

export default ErrorText
