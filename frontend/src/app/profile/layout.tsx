'use client'

import { userDataContext } from './[username]/contexts/userData'

export default function ProfilePageLayout({
    children
  }: {
    children: React.ReactNode,
  }) {

    //get user data
    // username = firstname[0] + lastname
    const userData = {id: 0, username : "tahan", firstname: 'taha', lastname: 'namir', photo: ''}

    return (
        <userDataContext.Provider value={userData}>
            <div className='bg-fixed bg-transparent w-full h-full' >{children}</div>
        </userDataContext.Provider>
    )
  }