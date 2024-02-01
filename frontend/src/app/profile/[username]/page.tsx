'use client'

import React, { FC, useContext } from 'react'
import { userDataContext } from './contexts/userData'
import UserProfile from './components/UserProfile'
import MusicList from './components/MusicList'
import Chat from './components/Chat'
import MediaPlayer from './components/MediaPlayer'

const ProfPage = () => {

  return (
    <div className='w-full bg-black h-[100vh] flex justify-evenly items-start md:pt-10 md:pb-10 overflow-scroll'>

      
        <MusicList />
      
      <UserProfile />
      <div className='lg:inline hidden bg-gradient-to-b from-slate-700 to-black rounded-lg w-[25%] h-full overflow-scroll'>
        <Chat />
      </div>
      <MediaPlayer />
    </div>

  )
}

export default ProfPage