import { motion } from 'framer-motion'
import React, { FormEvent, useEffect, useState } from 'react'

interface RegConfProps {
    hide: React.Dispatch<React.SetStateAction<boolean>>,
    confirm: (e: FormEvent<HTMLFormElement>) => void,
    setUserName: React.Dispatch<React.SetStateAction<string>>,
    userName: string,
}

const dropIn = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: {
        duration: 0.1, type: "spring", damping: 25, stiffness: 500,
    } },
    exit: { y: "100vh", opacity: 0 },
}

const RegConf:React.FC<RegConfProps> = ( { confirm, hide, setUserName, userName } ) => {

    const [validUsername, setValidUsername] = useState(true)
    useEffect( () => {
        if (userName === 'lol')
            setValidUsername(false)
        else {
            setValidUsername(true)
        }
    }, [userName])

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} className='flex items-center justify-center left-0 top-0 w-full h-full absolute bg-[#000000c8]' onMouseUp={() => hide(false)}>
        <motion.form onSubmit={(e) => {setUserName(userName); validUsername ? confirm(e) : ''}} className='p-4 rounded-xl min-w--52 bg-gradient-to-b from-slate-900 to-slate-500' variants={dropIn} initial="hidden" animate="visible" exit="exit" onMouseUp={e => e.stopPropagation()}>
            <div>
                {/* <label htmlFor="username" className='block text-md font-bold text-black'>Usename</label> */}
                <input autoComplete='off' minLength={3} maxLength={15} autoFocus type="text" id="usename" className='bg-white border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none' placeholder="username (3 - 15)" required onChange={e => {setUserName(e.target.value.trim()); e.target.value = e.target.value.trim()}} />
                {!validUsername ? <label className='block mb-2 text-xs font-bold text-red-600 px-1'>username already taken</label> : ''}
            </div>
            <button className='text-white flex items-center justify-center gap-2 bg-slate-600 rounded-2xl py-2 px-4 w-[50%] hover:bg-slate-400 transition-all mx-[25%] mt-4' type='submit' disabled={validUsername ? false : true}>Confirm</button>
        </motion.form>
    </motion.div>
  )
}

export default RegConf