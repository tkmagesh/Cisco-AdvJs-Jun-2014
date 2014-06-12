var products = [
	{id:9, name:"pen", cost:70, units:10, category:2},
	{id:3, name:"hen", cost:30, units:50, category:1},
	{id:7, name:"den", cost:20, units:30, category:2},
	{id:2, name:"len", cost:10, units:20, category:1},
	{id:5, name:"ten", cost:60, units:90, category:2},
	{id:1, name:"zen", cost:10, units:60, category:1}
]	

function sort(){
   for(var i=0;i<products.length-1;i++)
      for(var k=i+1;k<products.length;k++){
            var left = products[i], right = products[k];
            if (left.id > right.id){
                products[i] = products[k];
                products[k] = left;
            }
      }
}