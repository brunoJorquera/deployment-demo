const express = require('express')
const { dirname } = require('path')
const path = require('path')

const app = express()

// console.log(__dirname) Tells you the directory path

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4400
app.listen(port, () => {
    console.log(`Listening on port ${port}` )
})