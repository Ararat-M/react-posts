import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About'
import Posts from '../pages/Posts/Posts'
import PostIdPage from '../pages/PostIdPage/PostIdPage'
import Error from '../pages/Error/Error'

export function AppRoute() {
  return (
    <Routes>
      <Route path={"/about"} element={<About />}/>
      <Route path={"/"} element={<Posts/>}/>
      <Route path={"/:id"} element={<PostIdPage/>}/>
      <Route path={"*"} element={<Error />}/>
    </Routes>
  )
}
