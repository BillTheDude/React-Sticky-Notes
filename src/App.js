import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./Components/NotesList";

const App = () => {
  const [notes,setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first note",
    date: "10/04/21"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "02/01/21"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "08/04/21"
    },
    {
      id: nanoid(),
      text: "This is my new note",
      date: "12/04/21"
    }
]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid,
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

  return(
  <div className='container'>
    <NotesList notes={notes} handleAddNote={addNote}/>
  </div>  
    
  );
};

export default App;