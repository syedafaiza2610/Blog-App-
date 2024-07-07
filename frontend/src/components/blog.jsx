
import React from 'react';

const Form = ({ title, author, text, updateMode, delete_Blog }) => {
  return (
    <div className="todo">
      <div className="text">
        <h3>Title: {title}</h3>
        <p>Author: {author}</p>
        <p>Description: {text}</p>
      </div>
      <div className='icons'>
       <MdOutlineDeleteOutline className="icon" onClick={delete_Blog} />
       <MdOutlineEdit className="icon" onClick={updateMode} />

      </div>
    </div>
  );
};

export default Form;

