var test=new Array();
console.log(test.constructor);
if (test.constructor == Array){
	console.log("This is an Array");
}
if (test.constructor == Boolean)
{
	console.log("This is a Boolean");
}
if (test.constructor == Date)
{
	console.log("This is a Date");
}
if (test.constructor == String)
{
	console.log("This is a String");
}

function employee(name,job,born)
{
	this.name=name;
	this.job=job;
	this.born=born;
}

var bill=new employee("Bill Gates","Engineer",1985);

console.log(bill.constructor);