import React from "react";

function BlogList({ blogs }) {
  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div className="homeCard" key={blog.id}>
            <h1>The author is {blog.author}</h1>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BlogList;
