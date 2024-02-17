import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { userDataContext } from '../contexts/userData'
import Avatar from 'react-avatar'
import { BsThreeDots } from "react-icons/bs";
import { IoPencil } from "react-icons/io5";
import { BsPlusCircleFill } from "react-icons/bs";
import { playlist } from '../page';
import { motion } from 'framer-motion';

interface userProfileProps {
    currentPlaylist: playlist | undefined,
    setCurrentPlaylist : Dispatch<SetStateAction<playlist | undefined>>, 
}

const UserProfile:React.FC<userProfileProps> = ({currentPlaylist, setCurrentPlaylist}) => {

    const userData = useContext(userDataContext)

    const [newPfp, setNewPfp] = useState(false)

    const [playlists, setPlaylists] = useState<playlist[]>([])

    useEffect(() => {
        //fetch playlists
        setPlaylists([{id: 0, name:"playlist1", image:"/images/astronomie-du-ciel-nocturne-galactique-science-ont-combine-ia-generative.jpg", musicList:[{id: 0, name: "trackN.1", author: "tahes", image: "/images/loginBG.jpg", duration: "5:23"}, {id: 1, name: "trackN.1", author: "tahes", image: "/images/loginBG.jpg", duration: "5:23"}, {id: 2, name: "trackN.2", author: "tahes", image: "/images/loginBG.jpg", duration: "5:23"}, {id: 3, name: "trackN.1", author: "tahes", image: "/images/loginBG.jpg", duration: "5:23"}, {id: 4, name: "trackN.1", author: "tahes", image: "/images/loginBG.jpg", duration: "5:23"}, {id: 5, name: "trackN.1", author: "tahes", image: "/images/loginBG.jpg", duration: "5:23"}, {id: 6, name: "trackN.1", author: "tahes", image: "/images/loginBG.jpg", duration: "5:23"}, {id: 7, name: "trackN.1", author: "tahes", image: "/images/loginBG.jpg", duration: "5:23"}, {id: 8, name: "trackN.1", author: "tahes", image: "/images/loginBG.jpg", duration: "5:23"}, {id: 9, name: "trackN.3", author: "tahes", image: "/images/loginBG.jpg", duration: "5:23"}, ]}, {id: 1, name:"playlist2", image:"/images/loginBG.jpg", musicList:[{id: 0, name: "trackN.1", author: "tahes", image: "/images/loginBG.jpg", duration: "5:23"}]}, {id: 2, name:"playlist3", image:"/images/astronomie-du-ciel-nocturne-galactique-science-ont-combine-ia-generative.jpg", musicList:[{id: 0, name: "trackN.1", author: "tahes", image: "/images/loginBG.jpg", duration: "5:23"}]}, {id: 3, name:"playlist4", image:"/images/loginBG.jpg", musicList:[{id: 0, name: "trackN.1", author: "tahes", image: "/images/loginBG.jpg", duration: "5:23"}]}])
    }, [])

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} className='bg-gradient-to-b from-slate-700 to-black rounded-lg w-[100%] lg:w-[40%] h-full relative'>
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
        <div className='flex py-2 overflow-x-scroll'>
            <div className="bg-transparent inline-flex gap-2 px-6">
                {playlists.map((pl) =>
                    <span onClick={() => {setCurrentPlaylist(pl)}} className='hover:scale-105 transition-transform bg-black p-2 flex justify-center items-center w-full h-full rounded-2xl overflow-hidden'>
                        <div className='flex flex-col justify-center items-center w-40 h-40 rounded-2xl'>
                            {/* <span className='rounded-2xl w-40 h-40 flex items-center justify-center bg-black relative'> */}
                                <img className='object-cover w-40 h-40 rounded-2xl' src={pl.image}></img>
                            {/* </span> */}
                            <span className='bg-transparent text-gray-300 px-5 w-full flex justify-center rounded-lg font-bold'>{pl.name}</span>
                        </div>
                    </span>
                )}
            </div>
            <span className='flex justify-center items-center min-w-40 h-40 bg-transparent font-bold text-4xl text-gray-400 hover:text-white transition-colors cursor-pointer'><BsPlusCircleFill /></span>

        </div>
            <div className='h-20 bg-transparent'></div>
    </motion.div>
  )
}

export default UserProfile