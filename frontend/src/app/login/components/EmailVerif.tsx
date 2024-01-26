import axios from 'axios'
import { motion } from 'framer-motion'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useEffect, useRef, useState } from 'react'

const inputStyle = "w-7 h-6 border-0 outline-none bg-transparent text-white text-3xl font-extrabold border-b-2 border-white text-center"

let verifCode: string[] = ['', '', '', '', '', '']

const postToken = async (router: AppRouterInstance) => {
    await axios.post(`http://${process.env.NEXT_PUBLIC_HOST_IP}:${process.env.NEXT_PUBLIC_HOST_BACK_PORT}/api/auth/confirm`, {
        token: verifCode.join(""),
    }).then(res => {res.status == 200 || res.status == 201 ?  router.push('/login') : ''})
}

const EmailVerif = () => {

/* <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {backDropStatus ? <RegConf userName={userName} setUserName={setUserName} confirm={confirmForm} hide={() => setBackDropStatus(false)} /> : '' }
    </AnimatePresence> */

    const router = useRouter()

    const handleInputKeyUp = (e:React.KeyboardEvent<HTMLInputElement>, index: number) => {
        var prevElement = (e.currentTarget)?.previousElementSibling as HTMLInputElement
        var nextInput = (e.currentTarget)?.nextElementSibling as HTMLInputElement
        if (e.key == "Backspace" || e.key == "Delete") {
            if (e.currentTarget.value[0] !== "")
                verifCode[index] = ""
            e.currentTarget.value = ""
            prevElement?.focus()
        }
        else if (e.key >= '0' && e.key <= '9') {
            verifCode[index] = e.key
            e.currentTarget.value = e.key
            if (index == 5 && !verifCode.includes(""))
                submitCode(null)
            nextInput?.focus()
        }
        else if (e.key == "Enter")
            return;
        else {
            e.currentTarget.value = ""
            verifCode[index] = ""
        }
    }

    const submitCode = (e:FormEvent | null) => {
        e?.preventDefault()
        postToken(router)
    }

  return (
    <motion.form onSubmit={submitCode} className='flex flex-col items-center justify-center gap-10' initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className='text-white text-3xl font-bold'>Email verification</div>
        <div className='text-white text-lg text-center'>Please enter the verification code to verify your account. A code has been sent to your email adrress</div>
        <div className='flex items-center justify-between gap-4'>
            <input required onKeyUp={e => handleInputKeyUp(e, 0)} maxLength={1} type='text' inputMode='numeric' className={inputStyle}></input>
            <input required onKeyUp={e => handleInputKeyUp(e, 1)} maxLength={1} type='text' inputMode='numeric' className={inputStyle}></input>
            <input required onKeyUp={e => handleInputKeyUp(e, 2)} maxLength={1} type='text' inputMode='numeric' className={inputStyle}></input>
            <input required onKeyUp={e => handleInputKeyUp(e, 3)} maxLength={1} type='text' inputMode='numeric' className={inputStyle}></input>
            <input required onKeyUp={e => handleInputKeyUp(e, 4)} maxLength={1} type='text' inputMode='numeric' className={inputStyle}></input>
            <input required onKeyUp={e => handleInputKeyUp(e, 5)} maxLength={1} type='text' inputMode='numeric' className={inputStyle}></input>
        </div>
        <button type='submit' className='text-white flex items-center justify-center gap-2 bg-slate-600 rounded-2xl py-2 px-4 w-full hover:bg-slate-400 transition-all'>confirm</button>
        <div className='text-white text-xs'>Didn't receive the code? <a className='underline text-blue-500' href=''>Resend the code</a></div>
    </motion.form>
  )
}

export default EmailVerif