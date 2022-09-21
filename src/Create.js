import React, { useState } from "react";
import "./Create.css";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(title);
    alert(`form submitted ${title}`);
  };

  return (
    <div className="create">
      <div className="createTitle">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Article title.."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="underline"></div>
          <textarea
            placeholder="Tell your story.."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button>Publish</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
