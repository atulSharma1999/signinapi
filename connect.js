const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/connect-api", {
    useNewUrlParser: true,
    useCreateIndex : true
})
.then(() => {
    console.log("connect")
})
.catch(() => {
    console.log("retry")
})