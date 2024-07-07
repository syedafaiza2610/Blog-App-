const {Router} = require("express")
const { getblogs, postblogs, updateblogs, deleteblogs } = require("../controllers/blogController.js")
const router = Router()
router.get('/' , getblogs)
router.post('/blog' , postblogs)
router.put('/update' , updateblogs)
router.delete('/blog/:id' ,deleteblogs)



module.exports = router