var isPrime = (function(){
  var cache = {};
  return function(n){
     if (typeof cache[n] !== "undefined"){
        console.log("returing from cached..");
        return cache[n];
     }
     cache[n] = true;
     for(var i=2;i<=(n/2);i++){
        if (n % i === 0 && n !== i){
           cache[n] = false;
           break;
        }
     }
     console.log("freshly brewed...");
     return cache[n];
   }
})();