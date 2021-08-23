import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NoteList = ({ notes, handleAddNote, handleDelNote }) => {
  return (
    <div className="notes_list">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) => (
        <Note key={note.id} 
        id={note.id} 
        text={note.text} 
        date={note.date} 
        handleDelNote={handleDelNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
