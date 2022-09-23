import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import "./Home.css";

function Home() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return <div className="home">{blogs && <BlogList blogs={blogs} />}</div>;
}

export default Home;
