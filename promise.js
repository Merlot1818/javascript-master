'use strict';

new Promise(function () {
	// 直接运行测试:
	console.log('支持Promise!');
});


function test(resolve, reject) {
	var timeOut = Math.random() * 2;
	console.log('set timeout to: ' + timeOut + ' seconds.');
	setTimeout(function () {
		if (timeOut < 1) {
			console.log('call resolve()...');
			resolve('200 OK');
		}
		else {
			console.log('call reject()...');
			reject('timeout in ' + timeOut + ' seconds.');
		}
	}, timeOut * 1000);
}

var p1 = new Promise(test);
var p2 = p1.then(function (result) {
	console.log('成功：' + result);
});
var p3 = p2.catch(function (reason) {
	console.log('失败：' + reason);
});


console.log('1');
setTimeout(function(){
	console.log('2')
},0);

new Promise(function() {
	console.log('3');
});
