import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import cover from '../assets/cover.jpg'
import { danger, success } from '../constants/colors'
function Details() {
  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <img
          className="h-80 object-cover"
          src={cover}
          width="100%"
          height="100%"
        />
      </div>
      <div className="flex mt-2">
        <h2 className="text-4xl flex-1 font-medium text-center">Post Title</h2>
        <div className="flex">
          <div className="cursor-pointer">
            <AiOutlineEdit size={32} color={success} />
          </div>
          <div className="cursor-pointer">
            <AiOutlineDelete size={32} color={danger} />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-red-700">
          Author: <span className="font-medium">Anonymouse</span>
        </h3>
      </div>
      <article className="first-letter:font-bold first-letter:ml-6 first-letter:text-2xl text-justify leading-7 text-lg text-slate-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde odio
        illum voluptate laborum recusandae totam, odit, voluptas fuga obcaecati
        sunt sequi quaerat modi harum distinctio sit vero quod repellendus! Quia
        voluptatum amet molestiae assumenda quas sapiente temporibus nam optio
        modi. Mollitia ea, cum quam fuga doloremque consequuntur. Officia
        doloremque error amet consequatur, ea quo ipsam enim commodi distinctio?
        Repellat? Dolore vitae earum eius fugit quas repellendus officiis ea
        labore. Fugiat repellat iure dolorum illo fugit eius laboriosam dolorem
        expedita quis earum, id consequatur alias illum doloribus, fuga qui
        minima. Soluta incidunt adipisci deserunt minus vel dolores? Atque fuga
        facilis voluptates autem, quae doloribus tempore ducimus rem officiis
        nostrum ex sapiente vero expedita culpa id ipsum perferendis libero quas
        possimus.
      </article>
    </div>
  )
}

export default Details
