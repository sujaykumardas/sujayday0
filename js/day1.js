// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  // Write your code here
  var big = array[0];
  var sml;
  var i,j=0;
  for(i=1;i<array.length;i++) {
    if(big<array[i]) {
      big=array[i];
      j=i;
    }
  
  }
  console.log(array);
  console.log(big,j);
  if(j!=0)
    sml=array[0];
  else
    sml=array[1];
  
  for(i=0;i<array.length;i++) {
    if(sml<array[i]&&i!=j) {
      sml=array[i];
      
    }
    console.log(sml);  
  }
  console.log(sml);
return sml; 
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  // Write your code here
var chrset=[];
var freq=[];
var i,j=0,k=0,m=0;
var ch;
for(i=0;i<string.length;i++){
  if(string[i].charCodeAt(0)>96&&string[i].charCodeAt(0)<123){
    chrset[j]=string[i];
    //ch=string[i];
    j++;
  }
 
}
  for(i=0;i<chrset.length;i++){
    if(chrset[i]!=' '){
    ch=chrset[i];
    //console.log(ch);
    freq[m]=1;
    for(j=i+1;j<chrset.length;j++){
      if(chrset[j]==ch){
        freq[m]=freq[m]+1;
        chrset[j]=' ';
      }
        
    }
   m=m+1;   
    } 
  }
  
  var str;
  for(i=0;i<chrset.length;i++){
    str[i]=chrset[i]+": "+freq[i];
  }
  console.log(str);
  return str;
}

// Problem 5: Complete the pluckName function that takes a JS Array, returns a JS Array containing only name

function pluckName(unpluckedArray) {
  // write the code here
  
  var arr=[];
  
  var i;
  //
  if (unpluckedArray[0].hasOwnProperty('name'))   {
    for(i=0;i<unpluckedArray.length;i++){
      arr[i]=unpluckedArray[i].name;
    }
    console.log(arr);
    return arr;
    //Do this
  }
  else 
  {
    console.log(arr);
    return arr;
  }
    
  
  //var 
  
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  // Write your code here
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
}
