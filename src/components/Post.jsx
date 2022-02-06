import React from 'react';
import userImage from '../assets/user.jpg'
import Badge from './Utils/Badge';
function Post({image,category,title,time,descrip}) {
  return (
    <div className='h-auto bg-white drop-shadow-md overflow-hidden mx-10 my-4'>
            <div>
                <img className='object-cover rounded-t-md h-72' src={userImage} alt="post" width="100%" height="100%" />
            </div>
        <div className='px-4 py-2'>
            <div className='flex justify-center my-2'>
                <Badge className="mx-1" text="Post"/>
                <Badge className="mx-1" text="Music"/>
            </div>
            <div>
                <h2 className='text-2xl font-medium text-center'>Post Title</h2>
            </div>
            <div className='my-2'>
                <p className='text-center text-slate-400'>1 hour ago</p>
            </div>
            <div>
                <p className='text-slate-500 overflow-hidden line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eveniet aut, doloribus et sit alias officia cupiditate dignissimos aspernatur voluptatem accusamus ipsa assumenda non a, earum sunt, dolor libero perferendis.</p>
            </div>
        </div>
    </div>
  );
}

export default Post;
