const blogSchema = require("../models/data.js")

module.exports.getblogs = async(req , res) => {
    const Blog = await blogSchema.find()
    res.send(Blog)
}

module.exports.postblogs = async(req , res) => {
    const {title,author,description } = req.body
    blogSchema
    .create({title , author , description})
    .then((data)=>{ 
        console.log("Added Succesfully")
        console.log(data)
        res.send(data)
        
    })
    

}

module.exports.updateblogs = async(req , res) => {
    const {_id , description , title , author} = req.body
    blogSchema
    .findByIdAndUpdate(_id , {description , title , author})
    .then(() => res.send("updated sucessfully"))
    .catch((err) => console.log(err))
   
}
module.exports.deleteblogs = async (req, res) => {
    const { id } = req.params; 
    try {
        const deletedBlog = await blogSchema.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).send("Blog not found");
        }
        console.log("Deleted Successfully");
        res.send("Deleted successfully");
    } catch (err) {
        console.error("Error deleting blog:", err);
        res.status(500).send("Server Error");
    }
};
