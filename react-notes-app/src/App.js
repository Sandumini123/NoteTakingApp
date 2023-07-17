import React, { useState } from 'react'
import { nanoid} from 'nanoid';
import NotesList from './components/NotesList'

export default function App() {
  const[notes, setNotes] = useState([
    {
    id: nanoid(),
    text:"Take Your Notes Hear..........",
    date: "07/17/2023"
  },
  {
    id: nanoid(),
    text:"Take Your Notes Hear..........",
    date: "08/17/2023"
  },
  {
    id: nanoid(),
    text:"Take Your Notes Hear..........",
    date: "09/17/2023"
  },
  {
    id: nanoid(),
    text:"Take Your Notes Hear..........",
    date: "02/17/2023"
  },
  
]);
  return (
    <div className='container'>
      <NotesList notes={notes}/>
    </div>
  )
}
