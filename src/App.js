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

  return(
  <div className='container'>
    <NotesList notes={notes}/>
  </div>  
    
  );
};

export default App;