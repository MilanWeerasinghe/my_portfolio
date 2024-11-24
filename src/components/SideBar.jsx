import React from 'react'
import SideBarLayout from '../layouts/SideBarLayout'
import HeroSection from './sections/header/HeroSection'
import NavSection from './sections/header/NavSection'
import SocialIcons from './sections/header/SocialIcons'
import Resume from './Resume'

const SideBar = () => {
    return (
        <SideBarLayout>
            <div>
                <HeroSection />
                <div className='hidden lg:block mt-16 w-max'>
                    <NavSection />
                </div>
            </div>
            <div className='ml-1 mt-8'>
                <SocialIcons />
            </div>
            <div className='hidden lg:block lg:bottom-0 lg:fixed lg:left-0 lg:mb-24'>
                <Resume />
            </div>
        </SideBarLayout>
    )
}

export default SideBar
