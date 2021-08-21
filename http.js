var http=require('http');
http.createServer(function(req,res){
    if(req.url==='/')
    {res.end("this is home page");}
    else if(req.url==='/about')
   { res.end('this is about page');}
   else 
   res.end(`<h1>Oops!</h1>
   <p>No url match</p>
   <a href='/'>backHome</a>`
   )
}).listen(5000);