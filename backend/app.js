const express = require('express')
const app = express()


app.get("/", function(req, res){
   res.send("hey pranav")
})

app.listen(3000)