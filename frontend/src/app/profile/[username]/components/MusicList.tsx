import React, { Dispatch, SetStateAction } from 'react'
import { playlist } from '../page'

interface musicListProps {
  currentPLaylist: playlist | undefined,
  setCurrentPLaylist : Dispatch<SetStateAction<playlist | undefined>>, 
}

const MusicList:React.FC<musicListProps> = ({currentPLaylist, setCurrentPLaylist}) => {
  return (
    <div className='lg:flex flex-col items-center justify-start hidden bg-gradient-to-b from-slate-700 to-black rounded-lg w-[25%] h-full overflow-y-scroll relative'>
      <div className="overflow-hidden absolute w-full h-full opacity-40 flex items-center justify-center">
        <img className='object-cover absolute left-0 top-[25%] scale-[500%]' src={currentPLaylist?.image}></img>
      </div>
      {currentPLaylist?.musicList.map((track) => (
        <div className='w-10 h-3'>
          {track}
        </div>
      ))}
    </div>
  )
}

export default MusicList