'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Login from './components/Login'
import Register from './components/Register'
import EmailVerif from './components/EmailVerif'

const LogReg = () => {

  const [register, setRegister] = useState(false)

  return (
    <>
      <EmailVerif />
      {/* { register ?
      <>
        <Register />
        <motion.span initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.8}} onClick={() => {setRegister(false)}} className='mt-[-32px] text-white text-xs underline flex justify-end cursor-pointer'>Already registred?</motion.span>
      </> :
      <>
        <Login />
        <motion.span initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}} transition={{delay:0.8}} onClick={() => {setRegister(true)}} className='mt-[-30px] text-white text-xs underline flex justify-end cursor-pointer'>Not a member yet?</motion.span>
      </>
      } */}
    </>
  )
}

export default LogReg