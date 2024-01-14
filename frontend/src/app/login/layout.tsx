'use client'

import '../globals.css'
import { motion } from 'framer-motion'

export default function LoginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <main className="flex w-full h-[100%] justify-center p-16 select-none transition-all min-h-400px fixed overflow-y-scroll">
        <motion.div className='overflow-hidden w-[600px] min-w-[350px] max-w-[900px] lg:w-[80%] min-h-[37rem] rounded-3xl flex justify-center items-center lg:justify-normal z-0 bg-black border-2 lg:border-black md:min-h-[30rem]' initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className='rounded-3xl overflow-hidden -z-10 transition-all absolute lg:static opacity-30 lg:opacity-100 lg:block w-[60%] bg-black flex-col justify-center items-start'>
                <img draggable={false} className='transition-all bg-contain select-none' src='images/loginBG.jpg'></img>
            </div>
            <motion.div className='lg:bg-black w-[70%] lg:w-[60%] flex flex-col items-center justify-center gap-10 lg:px-20' initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
                {children}
            </motion.div>
      </motion.div>
    </main>
    )
}