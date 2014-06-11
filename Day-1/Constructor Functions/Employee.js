Constructor Functions

function Employee(id,name,salary){
  this.id = id;
  this.name = name;
  this.salary = salary;
}

expose accessor functions for the following conditions
1. "id" should be readonly
2. "name" cannot be assigned an empty string
3. "salary" cannot be assigned a value less than the current salary

function Employee(id,name,salary){
	var _id = id
		,_name = name
		,_salary = salary;

	this.id = function(){
		return _id;
	};

	this.name = function(val){
		if (typeof val === "undefined") return _name;
		if (val !== "") _name = val;
	};

	this.salary = function(val){
		if (typeof val === "undefined") return _salary;
		if (_salary < val) _salary = val;
	};
}