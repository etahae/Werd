import { motion } from 'framer-motion'
import React, { FormEvent, useEffect, useRef, useState } from 'react'

const inputStyle = "w-7 h-6 border-0 outline-none bg-transparent text-white text-3xl font-extrabold border-b-2 border-white text-center"

const EmailVerif = () => {
    
    const [verifCode, setVerifiCode] = useState('')

    const handleInputKeyUp = (e:React.KeyboardEvent<HTMLInputElement>) => {
        var prevElement = (e.currentTarget)?.previousElementSibling as HTMLInputElement
        var nextInput = (e.currentTarget)?.nextElementSibling as HTMLInputElement
        if (e.key == "Backspace" || e.key == "Delete") {
            if (e.currentTarget.value[0] !== "")
                setVerifiCode(old => old.slice(0, -1))
            e.currentTarget.value = ""
            prevElement?.focus()
        }
        else if (e.key >= '0' && e.key <= '9') {
            if (nextInput) {
                nextInput.focus()
                e.currentTarget.value = e.key
                setVerifiCode(old => old + e.key)
            }
            else
                return
        }
        else if (e.key == "Enter")
            return;
        else
            e.currentTarget.value = ""
    }

    const submitCode = (e:FormEvent) => {
        e.preventDefault()
        console.log(verifCode)
    }

    useEffect(() => {
        if (verifCode.length == 5)
            console.log(verifCode)
    }, [verifCode])


  return (
    <motion.form onSubmit={submitCode} className='flex flex-col items-center justify-center gap-10' initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className='text-white text-3xl font-bold'>Email verification</div>
        <div className='text-white text-lg text-center'>Please enter the verification code to verify your account. A code has been sent to your email adrress</div>
        <div className='flex items-center justify-between gap-4'>
            <input required onKeyUp={handleInputKeyUp} maxLength={1} type='text' inputMode='numeric' className={inputStyle}></input>
            <input required onKeyUp={handleInputKeyUp} maxLength={1} type='text' inputMode='numeric' className={inputStyle}></input>
            <input required onKeyUp={handleInputKeyUp} maxLength={1} type='text' inputMode='numeric' className={inputStyle}></input>
            <input required onKeyUp={handleInputKeyUp} maxLength={1} type='text' inputMode='numeric' className={inputStyle}></input>
            <input required onKeyUp={handleInputKeyUp} maxLength={1} type='text' inputMode='numeric' className={inputStyle}></input>
            <input required onKeyUp={handleInputKeyUp} maxLength={1} type='text' inputMode='numeric' className={inputStyle}></input>
        </div>
        <button type='submit' className='text-white flex items-center justify-center gap-2 bg-slate-600 rounded-2xl py-2 px-4 w-full hover:bg-slate-400 transition-all'>confirm</button>
        <div className='text-white text-xs'>Didn't receive the code? <a className='underline text-blue-500' href=''>Resend the code</a></div>
    </motion.form>
  )
}

export default EmailVerif