import axios from "axios";
const baseURL = "http://localhost:5000"
const getAllBlogs =(setBlogs) => {
    axios
    .get("http://localhost:5000")
    .then(({data}) =>{
        console.log("Data==>" , data)
        setBlogs(data)
    })

}
const addBlogs =(description ,setText ,setauthor , settitle, title, author, setBlogs) => {
    axios
    .post(`http://localhost:5000/blog` , {description , title , author})
    .then((data) =>{
        console.log(data)
        setText('')
        setauthor('')
        settitle('')
        getAllBlogs(setBlogs)
    })
    .catch((err) => console.log(err))

}
const updateBlogs =(blogId , description ,title,author , setauthor, settitle,setBlogs , setText , setisUpdating) => {
    axios
    .put(`${baseURL}/update` , {_id: blogId , description , title , author})
    .then((data) =>{
        setText('')
        setauthor('')
        settitle('')
        setisUpdating(false)
        getAllBlogs(setBlogs)
    })
    .catch((err) => console.log(err))

}
const delete_Blog = (_id, setBlogs) => {
    axios
      .delete(`http://localhost:5000/blog/${_id}`)
      .then(({ data }) => {
        console.log(data);
        getAllBlogs(setBlogs);
      })
      .catch((err) => console.error(err));
  };
  
// const deleteBlog = (_id, setBlogs) => {
//     axios
//       .delete(`${baseURL}/blog/:_id`, { data: { _id } })
//       .then(({ data }) => {
//         console.log(data);
//         getAllBlogs(setBlogs);
//       })
//       .catch((err) => console.error(err));
//   };



export {getAllBlogs , addBlogs , updateBlogs , delete_Blog}