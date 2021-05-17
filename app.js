const express = require("express") 
require("./connect") , port=3000
const app = express();
app.get('/',(req,res) => {
    res.send('hello')
})
app.listen(port,() => {
    console.log("port")
})