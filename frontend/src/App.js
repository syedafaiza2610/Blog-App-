import Form from "../src/components/blog";
import { useState, useEffect } from "react";

import { getAllBlogs, delete_Blog, updateBlogs, addBlogs } from "./controllers/handleApi";
function App() {
  const [Blogs, setBlogs] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isUpdating, setisUpdating] = useState(false);
  const [blogId, setBlogId] = useState("");

  useEffect(() => {
    getAllBlogs(setBlogs);
  }, []);

  const updateMode = (_id, text) => {
    setisUpdating(true);
    setText(text);
    setBlogId(_id);
  };

  const handleAddOrUpdate = () => {
    if (isUpdating) {
      updateBlogs(blogId, text, setBlogs, setText, setisUpdating);
    } else {
      addBlogs({ title, author, text }, () => {
        setTitle("");
        setAuthor("");
        setText("");
        getAllBlogs(setBlogs);
      });
    }
  };

  return (
    <div className="App">
      <div className="container1">
        <h1>Add Your Blog</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Add Your description"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="add" onClick={handleAddOrUpdate}>
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {Blogs.map((item) => (
            <Form
              key={item._id}
              title={item.title}
              author={item.author}
              text={item.text}
              updateMode={() => updateMode(item._id, item.description)}
              delete_Blog={() => delete_Blog(item._id, setBlogs)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
