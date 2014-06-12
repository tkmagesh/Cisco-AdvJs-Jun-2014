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

function min(list,attrName){
	var result = list[0][attrName];
	for(var i=1;i<list.length;i++)
		if (list[i][attrName] < result) result = list[i][attrName];
	return result;
}

function min(list,selector){
	var selectorFn = selector;
	if (typeof selector === "string")
		selectorFn = function(item){ return item[selector]};
	var result = selectorFn(list[0]);
	for(var i=1;i<list.length;i++)
		if (selectorFn(list[i]) < result) result = selectorFn(list[i]);
	return result;
}

function max(list,selector){
	var selectorFn = selector;
	if (typeof selector === "string")
		selectorFn = function(item){ return item[selector]};
	var result = selectorFn(list[0]);
	for(var i=1;i<list.length;i++)
		if (selectorFn(list[i]) > result) result = selectorFn(list[i]);
	return result;
}

function filter(list,predicate){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (predicate(list[i]))
			result.push(list[i]);
	return result;
}

var costlyProductCriteria = function(p){
	return p.cost > 50;
}

function groupBy(list,selector){
	var selectorFn = typeof selector === "function" ? selector : function(item){return item[selector]};
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = selectorFn(list[i]);
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}

min
max
avg
filter
groupBy
join

var categories = [
	{id : 1, name : "stationary"},
	{id : 2, name : "grocery"}
]

function join(leftList, rightList, leftKeyAttrName, rightKeyAttrName, transformerFn){
	var result = [];
	for(var i=0;i<leftList.length;i++)
		for(var j=0;j<rightList.length;j++){
			var leftKeyValue = leftList[i][leftKeyAttrName],
				rightKeyValue = rightList[j][rightKeyAttrName];
			if (leftKeyValue === rightKeyValue){
				result.push(transformerFn(leftList[i],rightList[j]));
			}
		}
	return result;
}

var productsWithCategoryNames = join(products,categories,"category","id",function(p,c){
   return {id : p.id, name : p.name, cost : p.cost, units : p.units, category : c.name};
});



