'use client'

import { useContext } from 'react'
import { userDataContext } from './contexts/userData'

export default function ProfilePageLayout({
    children, params
  }: {
    children: React.ReactNode,
    params: {username: string},
  }) {

    const userData = useContext(userDataContext)

    //get user data



    const userToDisplayData = {id: -1, username: params.username, firstname: 'xd', lastname: 'lmfao', photo: '/images/astronomie-du-ciel-nocturne-galactique-science-ont-combine-ia-generative.jpg'};
    // userData = userToDisplayData
    // const data = {id: 2, username : params.username, firstname: 'lmfao', lastname: 'xd', photo: 'images/loginBG.jpg'}


    return (
    
        params.username != userData.username ?

          <userDataContext.Provider value={userToDisplayData}>
              <div className='bg-fixed bg-transparent w-full h-full' >{children}</div>
          </userDataContext.Provider> :
        
        <div className='bg-fixed bg-transparent w-full h-full' >{children}</div>
    )
  }