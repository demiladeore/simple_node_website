const http = require("http");
const fs = require("fs");
const path = require("path");
const { url } = require("inspector");


const server = http.createServer((req, res)=>{
    console.log(req.url)


    res.setHeader('Content-Type', 'text/html')
    let path = './pages/'

    switch (req.url){

        case '/':
        case '/index.html':
            path +='index.html'
            res.statusCode = 200;
            break;
        case '/contact-me':
        case '/contact-me.html':
            path += 'contact-me.html'
            res.statusCode = 200
            break;
        
        
        case '/about':
        case '/about.html':
            path += 'about.html'
            res.statusCode = 200;
            break;
        
        default:
            path += '404.html'
            res.statusCode = 400;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err)

        }else{
            res.end(data)
        }
    })
})

server.listen(3000, 'localhost', ()=>{
    console.log('listening at port 3000')
})