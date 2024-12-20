import React from 'react'

const ContentLayout = ({children}) => {
  return (
    <main className='pt-24 lg:w-1/2 lg:py-24'>
      {children}
    </main>
  )
}

export default ContentLayout
