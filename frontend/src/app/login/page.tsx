'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Login from './components/Login'
import Register from './components/Register'

const LogReg = () => {

  const [register, setRegister] = useState(false)

  return (
    <>
      { register ?
      <>
        <Register />
        <span onClick={() => {setRegister(false)}} className='mt-[-32px] text-white text-xs underline flex justify-end cursor-pointer'>Already registred?</span>
      </> :
      <>
        <Login />
        <span onClick={() => {setRegister(true)}} className='mt-[-30px] text-white text-xs underline flex justify-end cursor-pointer'>Not a member yet?</span>
      </>
      }
    </>
  )
}

export default LogReg