import React, { Fragment, ReactNode } from 'react';
import Navigation from '../Navigation'
  
const Layout= ({children}:{children: any}) => {
  return (
    <Fragment>
        <Navigation/>
        {children}
    </Fragment>
  )
}

export default Layout