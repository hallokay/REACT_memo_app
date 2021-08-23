import React from 'react';
import {MdDeleteForever} from 'react-icons/md';

const Note = ({ id, text, date, handleDelNote }) => {
  return (
    <div className="note">
      <p> {text} </p>
      <div className="note_footer">
        <small>{date}</small>
        <MdDeleteForever
          className="del_icon"
          size="1.3rem"
          onClick={() => handleDelNote(id)}
        />
      </div>
    </div>
  );
};

export default Note
