import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createCard(emojiDetail) {
  return (
    <Card
      key={emojiDetail.id}
      emoji={emojiDetail.emoji}
      name={emojiDetail.name}
      meaning={emojiDetail.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
