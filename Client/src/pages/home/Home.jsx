import React from 'react'
import Feed from '../../components/feed/Feed'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import "./Home.css"


function Home() {
  return (
    <div>
      <Topbar />
      <div className='homeContainer'>
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  )
}

export default Home