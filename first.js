const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.end("Welcome to the home page ")
        return
    }
    if(req.url ==='/about'){
        res.end(" We are  company which can have a soloution that has been changing the  lives of the innocent people")
        return
    }
    else{
        res.end(`
           <h1> Oops Some thing went wrong </h1>
           <p> May be the page you are looking for is not   available </p>
           <a href = "/"> Back To Home Page</a>`)
           return
    }


})
server.listen(3000)
