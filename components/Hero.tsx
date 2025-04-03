'use client'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import TSParticles from './TSParticles'



const Hero = () => {
    /*
    * Hero Section of the resume
    * Will contain the banner and image
    * Should fill up the whole screen on both mobile and desktop
    */
    return (
        <div className="flex flex-col h-screen justify-center items-center relative">
        { /** 
            <TSParticles/>
            **/}
            <div className="col-span-5 flex flex-col items-center justify-center relative z-10">
                <h3 className="text-3xl">
                    Hello I&lsquo;m
                </h3>
                <TypeAnimation
                sequence={[
                    'Frasier', 2000,
                    'A University Graduate', 1000,
                    'A Web Developer', 1000,
                    'A Web Developer (kinda)', 1000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                style={{ fontSize: '2em', textAlign: 'center' }}
                />
                <p className="italic text-center"> Trying to create clean, efficient code to deliver seamless user experiences </p>

                <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mt-4">
                    <a href="https://github.com/Fozzyack" className="rounded-xl text-center border-green-500 border-2 text-green-500 px-5 py-2 hover:bg-green-500 hover:text-black hover:-translate-y-2 transition duration-500">
                        Github
                    </a>
                    <a href='/resume.pdf' className='rounded-xl border-2 border-white px-5 text-center py-2 hover:bg-white hover:text-black hover:-translate-y-2 transition duration-500'>
                        Résumé
                    </a>
                </div>
            </div>

            <div className="col-span-7">
                
            </div>
            
        </div>
    )
}

export default Hero
