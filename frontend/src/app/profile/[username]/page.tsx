'use client'

import React, { FC, useContext } from 'react'
import { userDataContext } from './contexts/userData'
import Image from 'next/image'

interface profPageProps {
    
}

const ProfPage:FC<profPageProps> = ({  }) => {

    const userData = useContext(userDataContext)

  return (
    <div className='w-[100vw] bg-transparent min-h-[100vh] flex justify-start items-center p-10 flex-col overflow-scroll'>
      <div className='w-full min-h-[200px] rounded-2xl py-4 bg-red-500 flex justify-between items-center px-10 '>
        <div>
          <Image src='/images/loginBG.jpg' className='rounded-full' width={160} height={160} alt={userData.username} ></Image>
          {userData.username} xd
        </div>
        <div>
          {userData.username} xd
        </div>
        <div>
          {userData.username} xd
        </div>
      </div>
    {/* <h1 className='w-full min-h-[200px] rounded-2xl p-2 bg-red-500'>{userData.username} xd</h1>

    <h1 className='w-full h-[200px] rounded-2xl p-2 bg-red-500'>{userData.username} xd</h1>

    <h1 className='w-full h-[200px] rounded-2xl p-2 bg-red-500'>{userData.username} xd</h1>
    <h1 className='w-full h-[200px] rounded-2xl p-2 bg-red-500'>{userData.username} xd</h1>
    <h1 className='w-full min-h-[200px] rounded-2xl p-2 bg-red-500'>{userData.username} xd</h1>
    <h1 className='w-full h-[200px] rounded-2xl p-2 bg-red-500'>{userData.username} xd</h1>
    <h1 className='w-full h-[200px] rounded-2xl p-2 bg-red-500'>{userData.username} xd</h1> */}

    </div>

  )
}

export default ProfPage