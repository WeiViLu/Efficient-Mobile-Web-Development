
//获取记录内容的文本域
var el=document.querySelector('#content');
el.addEventListener('blur',function(){
	var data=el.value;
	if(navigator.online){
		saveOnline(data);
	}else{
		localStorage.setItem('data',data);
	}
})

//监听上线事件
window.online=function(){
	var data=localStorage.getItem('data');
	if(!!data){
		saveOnline(data);
		localStorage.removeItem('data');
	}
}

//保存内容
function saveOnline(data){
	var xhr=new XMLHttpRequest();
	xhr.open('POST','http://localhost:8000/savedata');
	xhr.send('data='+data);
}

// 注册 service worker
navigator.serviceWorker.register('sw.js').then(function(registration) {
	console.log('Service Worker 注册成功');
}).catch(function (err) {
	console.log('Servcie Worker 注册失败：'+err);
});

