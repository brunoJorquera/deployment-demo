const express = require('express')
const path = require('path')

const app = express()

// console.log(__dirname) Tells you the directory path
app.use(express.static("client"))

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

const port = process.env.PORT || 4400
app.listen(port, () => {
    console.log(`Listening on port ${port}` )
})