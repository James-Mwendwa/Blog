import React from "react";
import "./Create.css";

function Create() {
  return (
    <div className="create">
      <div className="createTitle">
        <form>
          <input type="text" placeholder="Article title.." />
          <div className="underline"></div>
          <textarea placeholder="Tell your story.." />
          <button>Publish</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
