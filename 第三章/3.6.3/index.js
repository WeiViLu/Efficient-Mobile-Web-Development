var input=$("input[type='text']");
var cal=$("input[type='button']");
var result=$(".result");

cal.on("click",function(){
    var initValue=input.val();
    var w=new Worker("worker.js");
    w.postMessage(initValue);
    w.onmessage=function(event){
        result.html(result.html()+initValue+"=>"+event.data+"<br/>");
    }
})
