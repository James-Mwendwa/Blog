import React, { useState } from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body };
    console.log(blog);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      body: JSON.stringify(blog),
      header: {
        "Content-type": "application/json",
      },
    }).then(() => {
      history("/");
    });
  };

  return (
    <div className="create">
      <div className="createTitle">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Article title.."
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="underline"></div>
          <textarea
            placeholder="Tell your story.."
            required
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
