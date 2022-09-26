import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import "./Home.css";

function Home() {
  const [blogs, setBlogs] = useState(null);
  const handleDelete = (id) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response === 200) {
        setBlogs(
          blogs.filter((blog) => {
            return blog.id !== id;
          })
        );
      } else return;
    });
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
    </div>
  );
}

export default Home;
