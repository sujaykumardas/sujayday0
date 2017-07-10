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



for(k=1;k<i;k++) {
    res[k].sum=res[k].total+res[k-1].sum;
}

for(k=0;k<i;k++){
    console.log(res[k].sum);
}
