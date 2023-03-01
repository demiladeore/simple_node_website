const express = require('express')

const app = express();

app.listen(3000, 'localhost', ()=>{
    console.log(
        'listening here...'
    )
})

app.get("/", (req, res) => {
    res.sendFile("./pages/index.html", {root: __dirname})
})
app.get('/about', (req, res)=> {
    res.sendFile('./pages/about.html', {root: __dirname})


})
app.get('/contact-me', (req, res)=>{
    res.sendFile('./pages/contact-me.html', {root: __dirname})
})
app.get('/contact', (req, res)=>{
    res.redirect('/contact-me')
})


app.use((req, res) =>{
    res.status(404).sendFile('./pages/404.html', {root: __dirname})
})