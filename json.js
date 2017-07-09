/*var id=5;
console.log(id);*/

inp = {"new-value": 5, "price": 6};
key= ["price", "new-value"];
res= [
{"price": 10, "new-value": 8, "sum": 80, "total": 80},
{"price": 20, "new-value": 5, "sum": 180, "total": 100},
{"price": 10, "new-value": 5, "sum": 230, "total": 50},
];

inp["sum"]=inp["new-value"]*inp["price"];
//console.log(inp.sum);
inp["total"]=inp.sum;
//console.log(inp.total);
var i=res.unshift(inp);
//console.log(i);


var i;

for(i=1;i<4;i++) {
    res[i].sum=res[i].total+res[i-1].sum;
}

for(i=0;i<4;i++){
    console.log(res[i].sum);
}




