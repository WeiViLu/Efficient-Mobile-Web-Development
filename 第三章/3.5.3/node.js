var http=require("http");//引入http模块，创建web服务器
var fs=require("fs");//引入fs模块，操作文件
http.createServer(function(req,res){
    var index='./sse.html';
    var fileName;
    var interval;
    if(req.url==='/'){
        fileName=index;
    }else{
        fileName='.'+req.url;
    }
    if(fileName==='./stream'){
        res.writeHead(200,{
            "content-Type":"text/event-stream",
            "Cache-Control":"no-cache",
            "Connection":"keep-alive"
        });
        res.write("retry:10000\n");
        res.write("data:"+(new Date())+"\n\n");
        interval=setInterval(function(){
            res.write("data:"+(new Date())+"\n\n");
        },1000)
        //监听close事件，用于停止定时器
        req.connection.addListener("close",function(){
            clearInterval(interval);
        },false)
    }else if(fileName===index){
        //判断是否为页面请求，并找到相应文件返回页面
        fs.exists(fileName,function(exists){
            if(exists){
                fs.readFile(fileName,function(error,content){
                    if(error){
                        res.writeHead(500);
                        res.end();
                    }else{
                        //监听close事件，用于停止定时器
                        res.writeHead(200,{"Content-Type":"text/html"});
                        res.end(content,"utf-8");
                    }
                })
            }else{
                res.writeHead(404);
                res.end();
            }
        })
    }else{
        res.writeHead(404);
        res.end();
    }
}).listen(8080,"127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");