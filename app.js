const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000

app.use(express.static('public'))

app.get('/index', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'))
})

app.get('/learn-more', (req, res) => {
    res.sendFile(path.resolve('./public/learn-more.html'))
})

app.get('/continue-reading', (req, res) => {
    res.sendFile(path.resolve('./public/continue-reading.html'))
})

app.get('/blog-post', (req, res) => {
    res.sendFile(path.resolve('./public/blog-post.html'))
})

app.listen(port, () => console.log(`Example app listeningport ${port}!`))