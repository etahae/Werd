'use client'

import React, { FC, useContext } from 'react'
import { userDataContext } from './contexts/userData'

interface profPageProps {
    
}

const ProfPage:FC<profPageProps> = ({  }) => {

    const userData = useContext(userDataContext)

  return (
    <h1 className='text-9xl'>{userData.username} xd</h1>
  )
}

export default ProfPage