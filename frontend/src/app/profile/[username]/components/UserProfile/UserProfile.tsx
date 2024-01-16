import React, { useContext, useState } from 'react'
import { userDataContext } from '../../../contexts/userData'
import Avatar from 'react-avatar'
import { BsThreeDots } from "react-icons/bs";
import { IoPencil } from "react-icons/io5";
import MediaPlayer from './components/MediaPlayer';

const UserProfile = () => {

    const userData = useContext(userDataContext)

    const [newPfp, setNewPfp] = useState(false)

  return (
    <div className='bg-gradient-to-b from-slate-700 to-black rounded-lg w-[40%] h-[600px] overflow-scroll relative'>
        <div className='w-full rounded-2xl bg-transparent p-5 flex justify-between gap-5 items-center select-none'>
            <span className='font-bold text-4xl text-gray-100 flex items-center justify-between gap-5'>
                <div className='text-white bg-transparent w-[140px] h-[140px] rounded-full overflow-hidden relative' onMouseEnter={() => setNewPfp(true)} onMouseLeave={() => setNewPfp(false)}>
                    <Avatar className='z-0' src={userData.photo} color='black' alt={userData.username} textSizeRatio={3} name={userData.firstname + " " + userData.lastname} size='140' round />
                    {newPfp ?
                    <span className='bg-[#000000e1] text-base z-10 absolute top-0 left-0 w-[140px] h-[140px] rounded-full flex flex-col items-center justify-center'>
                        <span className='text-4xl'><IoPencil /></span>
                        Choose photo
                    </span> :
                    ''}
                </div>
                {userData.username}
            </span>
            <span className='text-gray-300 font-bold text-4xl bg-transparent hover:text-white cursor-pointer'>
                <BsThreeDots />
            </span>
        </div>
        <MediaPlayer />
    </div>
  )
}

export default UserProfile