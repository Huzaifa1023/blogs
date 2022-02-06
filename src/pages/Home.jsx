import React from 'react'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import {useNavigate} from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
  return (
    <div className="h-screen flex">
      <div className="flex flex-[3] flex-wrap">
        {[1, 2, 3, 4, 5].map((item,id) => {
          return (
            <div className="w-1/2" key={item} onClick={()=> navigate(`/post/${id}`)}>
              <Post />
            </div>
          )
        })}
      </div>
      <div className="flex-[1]">
        <Sidebar />
      </div>
    </div>
  )
}

export default Home
