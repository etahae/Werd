import React from 'react'
import { IoPlay } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";

const MediaPlayer = () => {
  return (
    <div className='absolute w-[50%] h-16 bg-gray-400 flex px-3 py-1 rounded-xl items-end justify-center top-[87%] text-black left-[25%]'>
        <div className='text-black flex items-center bg-transparent gap-5 text-xl justify-center'>
            <IoPlayBack />
            <IoPlay />
            <IoPlayForward />
        </div>
    </div>
  )
}

export default MediaPlayer