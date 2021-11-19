import React from 'react'
import Router from '@routes/Router'
import { UserDispatch, initialState } from './context'
import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'

const App = () => {
  return (
    <div>
      <Global
        styles={[
          css`
            ${emotionReset}
          `,
          {
            body: {
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            },
          },
        ]}
      />
      <UserDispatch.Provider value={initialState}>
        <Router />
      </UserDispatch.Provider>
    </div>
  )
}

export default App
