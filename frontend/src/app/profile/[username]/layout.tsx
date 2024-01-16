'use client'

import { userDataContext } from './contexts/userData'

export default function ProfilePageLayout({
    children, params
  }: {
    children: React.ReactNode,
    params: {username: string},
  }) {

    //get user data
    const userData = {username : params.username, firstname: 'taha', lastname: 'namir'}

    return (
        <userDataContext.Provider value={userData}>
            <div className='fixed bg-transparent w-full h-full' >{children}</div>
        </userDataContext.Provider>
    )
  }