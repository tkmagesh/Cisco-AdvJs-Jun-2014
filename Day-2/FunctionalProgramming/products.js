var products = [
	{id:9, name:"pen", cost:70, units:10, category:2},
	{id:3, name:"hen", cost:30, units:50, category:1},
	{id:7, name:"den", cost:20, units:30, category:2},
	{id:2, name:"len", cost:10, units:20, category:1},
	{id:5, name:"ten", cost:60, units:90, category:2},
	{id:1, name:"zen", cost:10, units:60, category:1}
]	

function sort(list,attrName){
   for(var i=0;i<list.length-1;i++)
      for(var j=i+1;j<list.length;j++){
            var left = list[i], right = list[j];
            if (left[attrName] > right[attrName]){
                list[i] = list[j];
                list[j] = left;
            }
      }
}

function sort(list,comparerFn){
	/*comparerFn => function(o1,o2) returning 1 if o1 > o2, 0 if o1 = o2, -1 if o1 < o2 */
   for(var i=0;i<list.length-1;i++)
      for(var j=i+1;j<list.length;j++){
            var left = list[i], right = list[j];
            if (comparerFn(left,right) > 0){
                list[i] = list[j];
                list[j] = left;
            }
      }
}

function sort(list,comparer){
	/*comparerFn => function(o1,o2) returning 1 if o1 > o2, 0 if o1 = o2, -1 if o1 < o2 */
	var comparerFn = comparer;
	if (typeof comparer === "string"){
		comparerFn = function(o1,o2){
			return o1[comparer] > o2[comparer] ? 1 : (o1[comparer] < o2[comparer] ? -1 : 0);
		}
	}
   for(var i=0;i<list.length-1;i++)
      for(var j=i+1;j<list.length;j++){
            var left = list[i], right = list[j];
            if (comparerFn(left,right) > 0){
                list[i] = list[j];
                list[j] = left;
            }
      }
}

min
max
avg
filter
groupBy


