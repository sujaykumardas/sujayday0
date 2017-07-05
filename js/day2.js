function calculateFrequency(string) {
  // Write your code here
var chrset=[];
var freq=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var i,j=0,k=0,m=0;

for(i=0;i<string.length;i++){
  //console.log(string[i].charCodeAt(0));
  if(string[i].charCodeAt(0)>96&&string[i].charCodeAt(0)<123){
    freq[string[i].charCodeAt(0)-97]=freq[string[i].charCodeAt(0)-97]+1;
    chrset[j]=string[i];
    j++;
  }
 
}
  console.log(chrset);
  console.log(freq);
  
  
  var str=[];
  for(i=0;i<chrset.length;i++){
    str[i]=chrset[i]+": "+freq[chrset[i].charCodeAt(0)-97];
  }
  console.log(str);
  return str;
}
