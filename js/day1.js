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

var freq=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  
var i;

for(i=0;i<string.length;i++){
  
  if(string[i].charCodeAt(0)>96&&string[i].charCodeAt(0)<123){
    freq[string[i].charCodeAt(0)-97]=freq[string[i].charCodeAt(0)-97]+1;
    
  }
 
}
  var arr=[];
   for(i=0;i<26;i++){
     if(freq[i]>0){
       //console.log(String.fromCharCode(i+97));
       arr[String.fromCharCode(i+97)]= freq[i];
     }
   }
   console.log(arr) ;
   return arr;
}

// Problem 5: Complete the pluckName function that takes a JS Array, returns a JS Array containing only name

function pluckName(unpluckedArray) {
  // write the code here
  
  var arr=[];
  
  var i,j;
  //
    
    for(i=0,j=0;i<unpluckedArray.length;i++){
      if (unpluckedArray[i].hasOwnProperty('name')){
        arr[j]=unpluckedArray[i].name;
        j++;
      }
      
    }
    console.log(arr);
    return arr;
    //Do this
 
    
  
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
