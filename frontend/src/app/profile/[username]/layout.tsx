'use client'

import React, { useContext } from 'react'
import { userDataContext } from './contexts/userData'

export default function ProfilePageLayout({
    children, params
  }: {
    children: React.ReactNode,
    params: {username: string},
  }) {

    //get user data
    const userData = {username : params.username}

    return (
        <userDataContext.Provider value={userData}>
            <div className='fixed' >{children}</div>
        </userDataContext.Provider>
    )
  }