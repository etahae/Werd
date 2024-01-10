'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Profile = () => {

  const router = useRouter()

  //redirect to current user profile

  router.push("/profile/taha")
}

export default Profile