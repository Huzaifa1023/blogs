import React from 'react';
import Button from '../Utils/Button';
import { primary } from '../../constants/colors'
import { IoIosAddCircle } from 'react-icons/io'

function CreatePostForm() {
  return (
      <>
        <form className="my-2">
          <div className="flex">
            <label htmlFor="fileInput">
              <IoIosAddCircle size={32} color={primary} />
            </label>
            <input type="file" className="hidden" id="fileInput" />
            <input
              className="flex-1 mx-4 px-2 placeholder:text-lg outline-none"
              type="text"
              placeholder="Title..."
            />
            <Button title="Publish" className="bg-teal-500" />
          </div>
          <div className="mt-2">
            <textarea
              placeholder="Tell your story..."
              className="placeholder:text-lg w-full h-40 bg-slate-50 outline-none px-2"
            />
          </div>
        </form>
      </>
  );
}

export default CreatePostForm;
