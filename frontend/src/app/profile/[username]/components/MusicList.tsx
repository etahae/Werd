import React, { Dispatch, SetStateAction } from 'react'
import { playlist, track } from '../page'
import { motion } from 'framer-motion'
import { BsPlusCircleFill } from 'react-icons/bs'

interface musicListProps {
  currentPlaylist: playlist | undefined,
  setCurrentPlaylist : Dispatch<SetStateAction<playlist | undefined>>,
  setCurrentTrack: Dispatch<SetStateAction<track | undefined>>,
}

const MusicList:React.FC<musicListProps> = ({currentPlaylist, setCurrentPlaylist, setCurrentTrack}) => {
  return (
    <motion.div key={currentPlaylist?.id} initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} className='lg:flex flex-col items-center justify-start hidden bg-gradient-to-b from-slate-700 to-black rounded-lg w-[25%] h-full overflow-y-scroll relative'>
      <div className="overflow-hidden absolute w-full h-full opacity-40 flex items-center justify-center">
        <img className='object-cover absolute left-0 top-[25%] scale-[500%]' src={currentPlaylist?.image}></img>
      </div>
      <div className='relative w-full h-full bg-transparent p-6 flex flex-col gap-1 items-center justify-start overflow-y-scroll'>
        {currentPlaylist?.musicList.map((_track) => (
          <div className='select-none cursor-pointer hover:scale-105 transition-all duration-300 hover:bg-opacity-100 text-black h-20 bg-slate-600 flex items-center justify-between w-full p-3 rounded-lg bg-opacity-85' onClick={() => {
            setCurrentTrack(_track)
          }}>
            <span className='flex items-center justify-center gap-2'>
              <img className='w-12 h-12 rounded-lg' src={_track.image}></img>
              <span className='flex flex-col'>
                <span className='font-bold'>{_track.name}</span>
                <span>{_track.author}</span>
              </span>
            </span>
            {_track.duration}
          </div>
        ))}
        <span className='mt-3 flex justify-center items-center min-w-40 h-40 bg-transparent font-bold text-4xl text-gray-400 hover:text-white transition-colors cursor-pointer'><BsPlusCircleFill /></span>
      </div>
    </motion.div>
  )
}

export default MusicList