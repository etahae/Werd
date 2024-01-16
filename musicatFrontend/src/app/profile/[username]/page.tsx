'use client'

import React, { FC, useContext } from 'react'
import { userDataContext } from '../contexts/userData'
import Avatar from 'react-avatar'
import UserProfile from './components/UserProfile/UserProfile'
import MusicList from './components/MusicList'
import Chat from './components/Chat'

const ProfPage = () => {

  return (
    <div className='w-full bg-black min-h-full flex justify-evenly items-start py-10 overflow-scroll'>

      <div className='bg-gradient-to-b from-slate-700 to-black rounded-lg w-[25%] h-[600px] overflow-scroll'>
        <MusicList />
      </div>
      <UserProfile />
      <div className='bg-gradient-to-b from-slate-700 to-black rounded-lg w-[25%] h-[600px] overflow-scroll'>
        <Chat />
      </div>

    </div>

  )
}

export default ProfPage