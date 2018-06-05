var obj = new Object();

Object.defineProperty(obj, 'name', {
	configurable: false,
	writable: true,
	enumerable: true,
	value: '张三'
})

console.log(obj.name)  //张三


"use strict"//严格模式
var person = {};

Object.defineProperty(person, 'name', {
	configurable: false,
	value: 'John'
}) ;

delete person.name   // 严格模式下抛出错误

console.log(person.name)  // 'John'  没有删除

/*Object.defineProperty(person, 'name', {
    configurable: true  //报错
});

Object.defineProperty(person, 'name', {
    enumerable: 2  //报错
});

Object.defineProperty(person, 'name', {
    writable: true  //报错
});

Object.defineProperty(person, 'name', {
    value: 2  //报错
});*/


var obj = {};
var aValue; //如果不初始化变量, 不给下面的a属性设置值,直接读取会报错aValue is not defined
var b;
Object.defineProperty(obj, 'a', {
	configurable : true,
	enumerable : true,
	get: function() {
		return aValue
	},
	set: function(newValue) {
		aValue = newValue;
		b = newValue + 1
	}
})
console.log(b) // undefined
console.log(obj.a)  // undefined, 当读取属性值时，调用get方法,返回undefined
obj.a = 2;  // 当设置属性值时,调用set方法,aValue为2

console.log(obj.a) // 2  读取属性值,调用get方法,此时aValue为2
console.log(b) // 3  再给obj.a赋值时,执行set方法,b的值被修改为2,额外说一句,vue中的计算属性就是利用setter来实现的


var obj = {};
Object.defineProperty(obj, 'a', {
	// value: 'a1',
	get: function() {
		return 'a2'
	}    
});


var obj = {};

Object.defineProperty(obj, 'a', {
	configurable: true,
	enumerable: false,
	writable: false,
	value: 1
});

Object.defineProperty(obj, 'a', {
	configurable: false,
	enumerable: true,
	writable: false ,
	value: 2
});
var d = Object.getOwnPropertyDescriptor(obj, 'a')
console.log(d);


var obj = {}

Object.defineProperty(obj, 'a', {
	configurable: true,
	enumerable: false,
	writable: false,
	value: 1
});
obj.a = 2;
var d = Object.getOwnPropertyDescriptor(obj, 'a')

console.log(d);


//enumerable
var obj = {};
Object.defineProperties(obj, {
    a: {
        value: 1,
        enumerable: false
    }, 
    b: {
        value: 2,
        enumerable: true
    },
    c: {
        value: 3,
        enumerable: false
    }
})

obj.d = 4;

//等同于

//Object.defineProperty(obj, 'd', {
//    configurable: true,
//    enumerable: true,
//    writable: true,
//    value: 4
//})

for(var key in obj) {
    console.log(key);  
    // 打印一次b, 一次d, a和c属性enumerable为false，不可被枚举
} 

var arr = Object.keys(obj);
console.log(arr);  // ['b', 'd']
