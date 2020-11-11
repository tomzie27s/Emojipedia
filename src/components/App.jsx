import React from "react";
import Emoji from "./Emoji.jsx";
import emojipedia from "../emojipedia.js";

function createEmoji(emoj) {
    return (
        <Emoji 
            id={emoj.id}
            key={emoj.id}
            emoji={emoj.emoji}
            name={emoj.name}
            meaning={emoj.meaning}
        />
    );
}

function App() {
  return (
    <div>
      <h1><span>Emojipedia</span></h1>
      <dl className="dictionary">
        {emojipedia.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;