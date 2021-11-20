import React from 'react'
import Router from '@routes/Router'
import { UserDispatch, initialState } from './context'
import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const App = () => {
  return (
    <>
      <Global
        styles={[
          css`
            @font-face {
              font-family: 'Poppins';
              src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
            }
            ${emotionReset}
          `,
          {
            body: {
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              backgroundColor: '#E7EDFF',
              height: '100vh',
            },
          },
        ]}
      />
      <UserDispatch.Provider value={initialState}>
        <Router />
      </UserDispatch.Provider>
    </>
  )
}

export default App
