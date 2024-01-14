import React, { FormEvent, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import RegConf from './RegConf'
import axios from 'axios'

const postNewUserData = async () => {
    await axios.post(`http://${process.env.NEXT_PUBLIC_HOST_IP}:${process.env.NEXT_PUBLIC_HOST_BACK_PORT}/api/auth/registerNewArtist`, {
        username: "xd",
        email: "lmao",
        password: "lol",
        confirmPassword: "lol"
    })
}

const Register = () => {

    const inputStyle = 'bg-white border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none'
    const labelStyle = 'block mb-2 text-sm font-medium text-gray-100'

    const [backDropStatus, setBackDropStatus] = useState(false)

    const submitForm = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setBackDropStatus(true)
    }

    const confirmForm = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setBackDropStatus(false)
        console.log(pw)
        console.log(pwConf)
        console.log(pwSimilar)
        console.log(userName)
        setUserName('')
        postNewUserData()
    }

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')
    const [pwConf, setPwConf] = useState('')

    const [userName, setUserName] = useState('')

    const [pwSimilar, setPwSimilar] = useState(false)

    useEffect(() => {
        pw === pwConf ? setPwSimilar(true) : setPwSimilar(false)
    }, [pwConf])

  return (
    <>
    <motion.form onSubmit={submitForm} initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className="grid gap-6 mb-3 md:grid-cols-2">
            <div>
                <label htmlFor="first_name" className={labelStyle}>First name</label>
                <input onChange={e => {setFirst(e.target.value.trim()); e.target.value = e.target.value.trim()}} pattern='[A-Za-z]+' minLength={3} maxLength={15} type="text" id="first_name" className={inputStyle} placeholder="First" required />
            </div>
            <div>
                <label htmlFor="last_name" className={labelStyle}>Last name</label>
                <input onChange={e => {setLast(e.target.value.trim()); e.target.value = e.target.value.trim()}} pattern='[A-Za-z]+' minLength={3} maxLength={15} type="text" id="last_name" className={inputStyle} placeholder="Last" required />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className={labelStyle}>Email address</label>
            <input onChange={e => {setEmail(e.target.value.trim()); e.target.value = e.target.value.trim()}} type="email" id="email" className={inputStyle} placeholder="exemple@mail.com" required />
        </div> 
        <div className="mb-3">
            <label htmlFor="password" className={labelStyle}>Password</label>
            <input onChange={e => setPw(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" type="password" id="password" className={inputStyle} placeholder="•••••••••" required />
        </div> 
        <div className="mb-3">
            <label htmlFor="confirm_password" className={labelStyle}>Confirm password</label>
            <input onChange={e => setPwConf(e.target.value)} type="password" id="confirm_password" className={inputStyle} placeholder="•••••••••" required />
            {!pwSimilar && pwConf != '' ? <label className='block mb-2 text-xs font-bold text-red-600 p-1'>passwords don't match</label> : ''}
        </div> 
        <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border-gray-300 rounded bg-white" required />
            </div>
            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.</label>
        </div>
        <button disabled={pwSimilar ? false : true} type="submit" className="text-white flex items-center justify-center gap-2 bg-slate-600 rounded-2xl py-2 px-4 w-full hover:bg-slate-400 transition-all">Submit</button>
        
    </motion.form>
    <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {backDropStatus ? <RegConf userName={userName} setUserName={setUserName} confirm={confirmForm} hide={() => setBackDropStatus(false)} /> : '' }
    </AnimatePresence>
    </>
  )
}

export default Register