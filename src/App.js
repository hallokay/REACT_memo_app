import { useState, useEffect } from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      const savedNotes = JSON.parse(
        localStorage.getItem("note_data")
        );
        if(savedNotes) {
          setNotes(savedNotes)
        }
    }, []);

  useEffect(() => {
    localStorage.setItem('note_data', JSON.stringify(notes));
  
  }, [notes]);


  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const delNote = (id) => {
    const delNotes = notes.filter((note) => note.id !== id);
    setNotes(delNotes);
  };

  return (
    <div className={`App ${darkMode ? "dark_mode" : ""}`}>
      <Header darkMode={setDarkMode} />
      <Search handelSearch={setSearchText} />

      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDelNote={delNote}
      />
    </div>
  );
}

export default App;
