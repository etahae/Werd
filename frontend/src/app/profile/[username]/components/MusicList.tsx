import React from 'react'

const MusicList = () => {
  return (
    <div className='lg:inline hidden bg-gradient-to-b from-slate-700 to-black rounded-lg w-[25%] h-full overflow-y-scroll relative'>
      <div className='absolute left-0 top-0 w-full h-full overflow-hidden opacity-40 flex items-center justify-center'>
        <img className='object-contain w-full h-52' src='/images/loginBG.jpg '></img>
      </div>
    </div>
  )
}

export default MusicList