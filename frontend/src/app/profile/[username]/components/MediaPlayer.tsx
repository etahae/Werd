import React, { useState } from 'react'
import { IoPlay } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { IoPause } from "react-icons/io5";

const MediaPlayer = () => {

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
    <div className='absolute w-full top-[86%] text-black left-0 flex justify-center items-center'>
      <div className='sticky bg-gray-400 w-[200px] md:w-[300px] transition-all flex px-3 py-1 rounded-xl flex-col items-center gap-5 justify-center'>
          <span className=' font-bold'>music name</span>
          {/* <div className='progress-success'></div> */}

          <div className='text-black flex items-center bg-transparent gap-5 text-xl justify-center'>
              <span className='hover:text-gray-300 cursor-pointer transition-all' onClick={backwardMusic}><IoPlayBack /></span>
              { isPaused ?
              <span className='hover:text-gray-300 cursor-pointer transition-all' onClick={playMusic}><IoPlay /></span>
              :
              <span className='hover:text-gray-300 cursor-pointer transition-all' onClick={pauseMusic}><IoPause/></span>
              }
              <span className='hover:text-gray-300 cursor-pointer transition-all' onClick={forwardMusic}><IoPlayForward /></span>
          </div>
      </div>
    </div>
  )
}

export default MediaPlayer