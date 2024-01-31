import React, { useContext, useEffect, useState } from 'react'
import { userDataContext } from '../contexts/userData'
import Avatar from 'react-avatar'
import { BsColumnsGap, BsThreeDots } from "react-icons/bs";
import { IoPencil } from "react-icons/io5";

interface playlist {
    name:string,
    image:string,
}

const UserProfile = () => {

    const userData = useContext(userDataContext)

    const [newPfp, setNewPfp] = useState(false)

    const [playlists, setPlaylists] = useState<playlist[]>([])

    useEffect(() => {
        //fetch playlists
        setPlaylists([{name:"playlist1", image:"/images/astronomie-du-ciel-nocturne-galactique-science-ont-combine-ia-generative.jpg"}, {name:"playlist2", image:"/images/loginBG.jpg"}, {name:"playlist2", image:"/images/astronomie-du-ciel-nocturne-galactique-science-ont-combine-ia-generative.jpg"}])
    }, [])

  return (
    <div className='bg-gradient-to-b from-slate-700 to-black rounded-lg w-[100%] lg:w-[40%] h-full overflow-scroll relative'>
        <div className='w-full rounded-2xl bg-transparent p-5 flex justify-between gap-5 items-center select-none'>
            <span className='font-bold text-4xl text-gray-100 flex items-center justify-between gap-5'>
                <div className='text-white bg-transparent w-[140px] h-[140px] rounded-full overflow-hidden relative' onMouseEnter={() => setNewPfp(true)} onMouseLeave={() => setNewPfp(false)}>
                    <Avatar className='z-0 object-cover' src={userData.photo} color='black' alt={userData.username} textSizeRatio={3} name={userData.firstname + " " + userData.lastname} size='140' round />
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
        <div className="bg-transparent grid grid-cols-2 gap-2 px-6">
            {playlists.map((pl) =>
                <span className='bg-transparent flex justify-center items-center w-full h-full rounded-2xl overflow-hidden'>
                    <div className='flex flex-col justify-center items-center w-52 h-52 rounded-2xl'>
                        {/* <span className='rounded-2xl w-52 h-52 flex items-center justify-center bg-black relative'> */}
                            <img className='object-cover w-52 h-52 rounded-2xl' src={pl.image}></img>
                        {/* </span> */}
                        <span className='bg-gray-400 text-gray-900 px-5 w-full flex justify-center rounded-lg font-bold'>{pl.name}</span>
                    </div>
                </span>
            )}
        </div>
    </div>
  )
}

export default UserProfile