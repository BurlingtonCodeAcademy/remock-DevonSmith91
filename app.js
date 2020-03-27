const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 5000
// What is accessable on the web side
app.use(express.static('public'))
// Routing to Home Page
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/HTML/index.html'))
})
// Routing to Learn More Page
app.get('/learn-more', (req, res) => {
    res.sendFile(path.resolve('./public/HTML/learn-more.html'))
})
// Routing to Continue Reading Page
app.get('/continue-reading', (req, res) => {
    res.sendFile(path.resolve('./public/HTML/continue-reading.html'))
})
// Routing to Blog Post page
app.get('/blog-post', (req, res) => {
    res.sendFile(path.resolve('./public/HTML/blog-post.html'))
})
// Where the remock is listening
app.listen(port, () => console.log(`Example app listeningport ${port}!`))