import React from 'react'
import { Route, Routes } from 'react-router'

import SignUpPage from '@pages/SignUpPage'
import SelectProfilePage from '@pages/SelectProfilePage'
import SignInPage from '@pages/SignInPage'
import InputTimePage from '@pages/InputTimePage'
import CreateRoomPage from '../../pages/CreateRoomPage'
import PendingRoomPage from '../../pages/PendingRoomPage'

const Router = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<h1>hello</h1>}></Route>
      <Route path="/signup" exact={true} element={<SignUpPage />} />
      <Route path="/signin" exact={true} element={<SignInPage />} />
      <Route
        path="/selectProfile"
        exact={true}
        element={<SelectProfilePage />}
      />
      <Route path="/inputTime" exact={true} element={<InputTimePage />} />
      <Route path="/createRoom" exact={true} element={<CreateRoomPage />} />
      <Route path="/pendingRoom" exact={true} element={<PendingRoomPage />} />

      {/* <Route path="/signIn" exact></Route> */}

      {/* privateRoute 파일 작성 시 */}
      {/* <PrivateRoute component={컴포넌트} path="/경로" exact />
    
    */}

      {/* <Route path="*" exact>
      
    </Route> */}
    </Routes>
  )
}

export default Router
