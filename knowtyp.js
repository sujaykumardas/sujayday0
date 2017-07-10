var elem="sujay";
var elem={k:2,i:8};
var elem=[1,2,3];
var elem={k:2,i:8};
//var elem=5;
var type = typeof elem;
if (type == "number") {
   console.log("is num");
}
else if (type == "string") {
   console.log("is str");
}
else if (type ==="object") { 
if(Array.isArray(elem)){ 
   console.log("is array");
}
else 
   console.log("is object");
}

