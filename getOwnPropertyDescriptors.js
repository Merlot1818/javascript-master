var person = {
	name: '张三',
	age: 18
}
var desc = Object.getOwnPropertyDescriptors(person, 'name');
console.log(desc);