import React from 'react'
import styled from '@emotion/styled'

const Time = ({ color = '#4f4f4f', fontSize = '26px' }) => {
  return (
    <TimeContainer color={color} fontSize={fontSize}>
      19:00 ~ 20:00
    </TimeContainer>
  )
}

const TimeContainer = styled.div`
  /* position: absolute; */
  /* width: 68px; */
  height: 39px;
  left: 194px;
  top: 453px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ fontSize }) => fontSize};
  line-height: 39px;
  /* identical to box height */

  /* Gray 2 */

  /* color: #4f4f4f; */
  color: ${({ color }) => color};
`

export default Time
