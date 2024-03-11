import React, { Fragment, ReactNode } from 'react';
import Navigation from '../Navigation'
  
const Layout= ({children}:{children: any}) => {
  return (
    <div className='relative flex flex-row'>
        <Navigation/>
        <div className='z-40 w-full'>
          {children}
        </div>
    </div>
  )
}

export default Layout