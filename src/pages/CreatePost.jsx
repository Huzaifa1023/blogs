import React from 'react'
import cover from '../assets/cover.jpg'
import CreatePostForm from '../components/forms/CreatePostForm'

function CreatePost() {
  return (
    <div className="px-32 mt-2">
      <div className="rounded-md overflow-hidden">
        <img
          className="h-72 object-cover"
          src={cover}
          width="100%"
          height="100%"
        />
      </div>
      <div>
        <CreatePostForm/>
      </div>
    </div>
  )
}

export default CreatePost
