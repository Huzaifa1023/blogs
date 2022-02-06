import React from 'react'
import Sidebar from '../components/Sidebar'
import Details from '../components/Details'
function PostDetails() {
  return (
    <div className="flex">
      <div className="flex-[7] px-4 my-2">
        <Details/>
      </div>
      <div className="flex-[2]">
        <Sidebar />
      </div>
    </div>
  )
}

export default PostDetails
