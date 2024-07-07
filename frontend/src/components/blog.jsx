// import React from 'react'
// import { MdOutlineDeleteOutline } from "react-icons/md";
// import { MdOutlineEdit } from "react-icons/md";

// const Form = ({ text,title,author, delete_Blog, updateMode }) => {
//   return (
//     <div className='todo'>
//       <div className='text'>{title}</div>
//       <div className='text'>{author}</div>
//       <div className='text'>{text}</div>

//       <div className='icons'>
//         <MdOutlineDeleteOutline className="icon" onClick={delete_Blog} />
//         <MdOutlineEdit className="icon" onClick={updateMode} />

//       </div>

//     </div>
//   )
// }

// export default Form;
// ../src/components/blog.js
import React from 'react';

const Form = ({ title, author, text, updateMode, delete_Blog }) => {
  return (
    <div className="todo">
      <div className="text">
        <h3>Title: {title}</h3>
        <p>Author: {author}</p>
        <p>Description: {text}</p>
      </div>
      <div className="icons">
        <span className="icon" onClick={updateMode}>Update</span>
        <span className="icon" onClick={delete_Blog}>Delete</span>
      </div>
    </div>
  );
};

export default Form;

