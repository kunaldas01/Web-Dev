import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(inputText) {
    setNotes((preValue) => {
      return [...preValue, inputText];
    });
  }

  function deleteNote(id) {
    setNotes((preValue) => {
      return preValue.filter((item, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />

      {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} delete={deleteNote} />;
      })}

      <Footer />
    </div>
  );
}

export default App;