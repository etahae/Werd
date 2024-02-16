import React, { Dispatch, SetStateAction, useState } from 'react'
import { IoPlay } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { IoPause } from "react-icons/io5";
import { playlist, track } from '../page';

interface mediaPlayerProps {
  currentPlaylist: playlist | undefined,
  currentTrack: track | undefined,
  setCurrentTrack: Dispatch<SetStateAction<track | undefined>>,
}

const MediaPlayer:React.FC<mediaPlayerProps> = ( { currentPlaylist, currentTrack, setCurrentTrack } ) => {

  const playMusic = () => {
    setIsPaused(false)
  }

  const pauseMusic = () => {
    setIsPaused(true)
  }

  const forwardMusic = () => {
    
  }

  const backwardMusic = () => {

  }

  const [isPaused, setIsPaused] = useState(true)

  return (
    <div className='select-none absolute w-full top-[80%] text-black left-0 flex justify-center items-center'>
      {currentTrack ? <div className='sticky bg-gray-400 w-[200px] md:w-[300px] transition-all flex px-3 py-1 rounded-xl flex-col items-center gap-3 justify-center'>
          <span className=' font-bold'>{currentTrack?.name}</span>

          <div className='relative w-full text-black font-semibold flex gap-1 justify-evenly items-center'>
            <span>0:00</span>
            <progress className="progress progress-primary w-full" value={100} max="100"></progress>
            <span>{currentTrack.duration}</span>
          </div>
    
          <div className='text-black flex items-center bg-transparent gap-5 text-xl justify-center'>
              <span className='hover:text-gray-300 cursor-pointer transition-all' onClick={backwardMusic}><IoPlayBack /></span>
              { isPaused ?
              <span className='hover:text-gray-300 cursor-pointer transition-all' onClick={playMusic}><IoPlay /></span>
              :
              <span className='hover:text-gray-300 cursor-pointer transition-all' onClick={pauseMusic}><IoPause/></span>
              }
              <span className='hover:text-gray-300 cursor-pointer transition-all' onClick={forwardMusic}><IoPlayForward /></span>
          </div>
      </div>: ""}
    </div>
  )
}

export default MediaPlayer