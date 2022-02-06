import React from 'react';
import userImage from '../assets/user.jpg'
import { categories, socials } from '../constants/list';
import LineBreak from './Utils/LineBreak';
function Sidebar() {
  return (
    <div className='bg-slate-100 px-4 py-4'>
        <div>
            <img src={userImage} width='100%' height="auto"/>
        </div>
        <div className='my-2'>
            <p className='text-sm leading-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis quisquam, temporibus quibusdam architecto quaerat deleniti odio perspiciatis, amet doloribus quo sunt dicta quas molestiae obcaecati autem a dolorem. Explicabo.
            </p>
        </div>
        <div className='my-2'>
            <LineBreak/>
            <h2 className='text-xl text-center py-1 font-bold'>
                Categories
            </h2>
            <LineBreak/>
            <div className='flex w-full flex-wrap'>
                {categories.map((category)=> (
                    <div key={category.id} className="w-1/2 my-2">
                        <p className='cursor-pointer'>{category.title}</p>
                    </div>
                ))}
            </div>
        </div>
        <div>
        <LineBreak/>
            <h2 className='text-xl text-center py-1 font-bold'>
                Follow Us
            </h2>
        <LineBreak/>
        <div className='flex justify-center my-2'>
        {socials.map(({ id, Icon }) => {
          return (
            <div key={id} className="mx-2">
              <Icon size={25} />
            </div>
          )
        })}
        </div>
        </div>
    </div>
  );
}

export default Sidebar;
