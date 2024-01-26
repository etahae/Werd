'use client'
import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { userDataContext } from './[username]/contexts/userData'

const Profile = () => {

  const router = useRouter()

  const userData = useContext(userDataContext)

  //redirect to current user profile

  useEffect(() => {
    router.push(`/profile/${userData.username}`)
  }, [])
}

export default Profile