var arr=[1,2,3,4,5,6];
var sar=[878,3,5,888,66,7];
var join=[];
var i=0,k=0;
while(i<arr.length){
	join[i]=arr[i];
	i++;
}
while(i<arr.length+sar.length){
	join[i++]=sar[k++];
}
document.write(join);
