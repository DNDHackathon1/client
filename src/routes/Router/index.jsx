import React from 'react'
import { Route, Routes } from 'react-router'
import LoginPage from '@pages/LoginPage'
const Router = () => {
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            exact={true}
            path={'/'}
            element={<h1>hello</h1>}
          ></Route>
          <Route path="/signup" exact={true} element={<LoginPage />}></Route>

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
