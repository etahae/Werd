'use client'

// import React, { FC, useContext } from 'react'
import UserProfile from './components/UserProfile'
import MusicList from './components/MusicList'
import Chat from './components/Chat'
import MediaPlayer from './components/MediaPlayer'
import { useState } from 'react'

export interface track {
  id: number,
  name: string,
  image: string,
  author: string,
  duration: string,
}

export interface playlist {
  id: number,
  name: string,
  image: string,
  musicList: track[],
}

const ProfPage = () => {

  const [currentPlaylist, setCurrentPlaylist] = useState<playlist>()
  const [currentTrack, setCurrentTrack] = useState<track>()

  return (
    <div className='w-full bg-black h-[100vh] flex justify-evenly items-start md:pt-10 md:pb-10 overflow-scroll'>
      
      <MusicList currentPlaylist={currentPlaylist} setCurrentPlaylist={setCurrentPlaylist} setCurrentTrack={setCurrentTrack} />
  
      <UserProfile currentPlaylist={currentPlaylist} setCurrentPlaylist={setCurrentPlaylist} />

      <div className='lg:inline hidden bg-gradient-to-b from-slate-700 to-black rounded-lg w-[25%] h-full overflow-scroll'>
        <Chat />
      </div>

      <MediaPlayer currentPlaylist={currentPlaylist} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack}/>
    </div>

  )
}

export default ProfPage