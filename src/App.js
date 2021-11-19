import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import style from '@emotion/styled'
const App = () => {
  return (
    <div>
      <Header>안녕하세요</Header>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  )
}

const Header = style.h1`
 text-align : center;
`

export default App
