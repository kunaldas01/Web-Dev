import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInputText((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    });
  }

  return (
    <div>
      <form onSubmit={(event) => {
        event.preventDefault();
        if (inputText.title === "" || inputText.content === "") {
          return;
        }
        props.addNote(inputText);
        setInputText({
          title: "",
          content: ""
        });
      }}>
        <input name="title" value={inputText.title} placeholder="Title" onChange={handleChange} />
        <textarea name="content" value={inputText.content} placeholder="Take a note..." rows="3" onChange={handleChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;