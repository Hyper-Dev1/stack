import React from "react";
import { useState, useEffect } from "react";
import noteService from "./Services/notes";

const App = ({ notez }) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [newNumber, setNewNumber] = useState("");
  // const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);
  // console.log("render", notes.length, "notes");

  const AddNote = (event) => {
    event.preventDefault();
    const ln = newNote.toLowerCase();
    // console.log(ln);

    for (let i = 0; i < notes.length; i++) {
      const lns = notes[i].name.toLowerCase();
      const ids = notes[i].id;
      if (lns === ln) {
        const noteObject = {
          name: newNote,
          number: newNumber,
          id: ids,
          // important: Math.random() < 0.5,
        };
        noteService.update(ids, noteObject).then((returnedNote) => {
          setNotes(notes.map((note) => (note.id !== ids ? note : returnedNote)));
        });
        break;
      } else {
        const noteObject = {
          name: newNote,
          number: newNumber,
          id: notes.length + 1,
          // important: Math.random() < 0.5,
        };
        noteService.create(noteObject).then((returnedNote) => {
          setNotes(notes.concat(returnedNote));
          setNewNote("");
        });
      }
    }
    // const noteObject = {
    //   name: newNote,
    //   number: newNumber,
    //   id: notes.length + 1,
    //   // important: Math.random() < 0.5,
    // };
    // noteService.create(noteObject).then((returnedNote) => {
    //   setNotes(notes.concat(returnedNote));
    //   setNewNote("");
    // });
  };

  const txtChanged = (event) => {
    // console.log(event.target.value);
    setNewNote(event.target.value);
  };
  const numChanged = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const Delete = (id) => {
    console.log(id);
  };

  return (
    <div>
      <h1>Number NoteBook</h1>
      <form onSubmit={AddNote}>
        <label>Enter Your Name </label>
        <input type="text" onChange={txtChanged} />
        <br />
        <br />
        <label>Enter Your Number </label>
        <input type="Number" onChange={numChanged} /> <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {notes.map((note) => (
          <p key={note.id}>
            {note.name} {note.number}
            <button onClick={() => noteService.deletes(note.id)}>Delete</button>
          </p>
        ))}
      </ul>
    </div>
  );
};

export default App;
