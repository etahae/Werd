import React, { FormEvent, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { motion } from 'framer-motion'
import axios from 'axios'
// import { useRouter } from 'next/router'

const postLoginData = async () => {
  try {
    await axios.post(`http://${process.env.NEXT_PUBLIC_HOST_IP}:${process.env.NEXT_PUBLIC_HOST_BACK_PORT}/api/auth/login`, {
        username: "xd",
        password: "lol"
    }, {withCredentials: true})
  } catch {}
}

const Login = () => {

  const [user_email, setUserEmail] = useState('')
  const [password, setPassword] = useState('')

  // const router = useRouter()

  const LoginSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // postLoginData()
    
  }

  return (
    <>
      <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.2}} className='flex flex-col justify-center items-start w-full'>
        <span className='text-white'>Welcome to</span>
        <span className='text-white font-bold text-4xl'>Musicat</span>
      </motion.div>

      <motion.form initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.6}} onSubmit={LoginSubmit} id='loginForm' className='flex flex-col gap-3 w-full'>
        <div>
            <label htmlFor="email-username" className="block mb-2 text-sm font-medium text-gray-100">Email or username</label>
            <input onChange={e => {setUserEmail(e.target.value.trim()); e.target.value = e.target.value.trim()}} required placeholder='email or username' type="text" id="email-username" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs outline-none bg-white transition-all"/>
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-100">Password</label>
            <input onChange={e => {setPassword(e.target.value)}} required placeholder='password' type="password" id="password" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs outline-none bg-white transition-all"/>
            <div className='text-white text-xs underline flex justify-end mt-1'>
            <span className='cursor-pointer'>Got Alzheimer?</span>
            </div>
        </div>
      </motion.form>
        
      <motion.div initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.4}} className='flex flex-col gap-2 items-center justify-center w-full'>
        <button form='loginForm' type='submit' className='text-white flex items-center justify-center gap-2 bg-slate-600 rounded-2xl py-2 px-4 w-full hover:bg-slate-400 transition-all'>login</button>
        <button className='text-white flex items-center justify-center gap-2 bg-slate-600 rounded-2xl py-2 px-4 w-full hover:bg-slate-400 transition-all'><FcGoogle /> Login with Google</button>
      </motion.div>
    </>
  )
}

export default Login