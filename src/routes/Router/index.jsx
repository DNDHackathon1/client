import React from 'react'
import { Route, Routes } from 'react-router'
import { PostPage, LoginPage, SignUpPage, RunningPage } from '@pages'
const Router = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/post" exact={true} element={<PostPage />}></Route>
          <Route path="/signup" exact={true} element={<SignUpPage />}></Route>
          <Route path="/running" exact={true} element={<RunningPage />}></Route>

          {/* <Route path="/signIn" exact></Route> */}

          {/* privateRoute 파일 작성 시 */}
          {/* <PrivateRoute component={컴포넌트} path="/경로" exact />
       
       */}

          {/* <Route path="*" exact>
          
        </Route> */}
        </Routes>
      </div>
    </>
  )
}

export default Router
