const  fs  = require("fs");
const http = require("http");
const path = require("path");


http.createServer((req,res)=>{
    if(req.url == "/") {
        fs.readFile(path.join(__dirname,'public', 'index.html'), (err, data)=>{
            if(err) console.error(err);
            res.writeHead(200,{"content-Type": "text/html"})
            res.end(data)
        })
    }
}).listen(3000 || process.env.PORT, () => console.log("Server Running on port http://localhost:3000/"))