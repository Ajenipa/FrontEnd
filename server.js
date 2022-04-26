const express =  require("express")
const path = require('path')
const app = express()
port = process.env.PORT || 7000
app.use(express.static("public"))
app.get("/", (req,res)=>{
    res.send("kkk")
})
app.listen(port, ()=>{
    console.log(`listening on port ${port}...`)
})
