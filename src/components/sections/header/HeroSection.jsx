import React from 'react'

const HeroSection = () => {
    return (
        <>
            <code>
                <h1 className='text-teal-300 pl-1 mb-2 tracking-tight'>Hi, my name is</h1>
            </code>
            <h1 className='text-4xl pb-2 font-bold tracking-tight bg-gradient-to-b from-slate-200 to-slate-300 text-transparent bg-clip-text sm:text-5xl '>
                <a href="/">Milan Weerasinghe</a></h1>
            <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-300 sm:text-xl'>Computer Science Undergraduate</h2>
            <p className='mt-4 max-w-xs leading-normal'>Exploring <br />Science behind Computers.</p>
        </>
    )
}

export default HeroSection
