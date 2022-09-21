import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [blogs, setBlogs] = useState([]);
  //eslint-disable-next-line
  const fetchBlogs = async () => {
    const res = await fetch(" http://localhost:8000/blogs");
    const json = await res.json();
    setBlogs(json);
  };

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);
  return (
    <div className="home">
      {blogs.map((blog) => {
        return (
          <div className="homeCard" key={blog.id}>
            <h1>{blog.author}</h1>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
