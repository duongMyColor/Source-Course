import { useState } from 'react'

import PostList from './components/PostList'
import MainHeader from './components/MainHeader'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
    <MainHeader/>
    <main>
    {/* <PostList isPost={modalIsShow} stopModelPost={handleCloseModel} /> */}
    <Outlet/>

    </main>
     
    </>
  )
}

export default App
