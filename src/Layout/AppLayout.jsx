import React from 'react'
import Topbar from '../components/Topbar'
function AppLayout({children}) {
  return (
    <>
      <Topbar />
      {children}
    </>
  )
}

export default AppLayout
