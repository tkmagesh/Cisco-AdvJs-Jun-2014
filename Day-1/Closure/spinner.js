create an object (how you create it is what matters) that exhibit the following behavior

var spinner= //......

spinner.up() => 1
spinner.up() => 2
spinner.up() => 3
spinner.up() => 4

spinner.down() => 3
spinner.down() => 2
spinner.down() => 1
spinner.down() => 0
spinner.down() => -1

function getSpinner(){
	var counter = 0;
	function increment(){
		return ++counter;
	}
	function decrement(){
		return --counter;
	}
	return {
		up : increment,
		down : decrement
	}
}

var spinner =  getSpinner()

var spinner = (function(){
	var counter  = 0;
	return {
		up : function(){
			return ++counter;
		},
		down : function(){
			return --counter;
		}
	}
})()




