import React from 'react'

const SideBarLayout = ({children}) => {
  return (
    <div className='lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
      {children}
    </div>
  )
}

export default SideBarLayout
