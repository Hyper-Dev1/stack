import React from 'react'

const Notes = ({ note }) => {
    return (
      <li key={note.key}>{note.name} {note.number} </li>
    )
  }
  
  export default Notes