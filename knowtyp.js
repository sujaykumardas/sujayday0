
var ob={k:2,l:8,m:9};
var arob=[{k:3,l:3},{m:5,n:8}];




function check(elem){

	var type = typeof elem;

	if (type =="object") { 
		if(Array.isArray(elem)){ 
   
			if(elem.length>0){
				if(elem[0].hasOwnProperty('k')){
					console.log(elem[0]['k']);		
				}
			else{
				console.log("No k key at 0th index of array");	
			}
			}
		else{
			console.log("empty array");	
		}
		}
		else {
			if(elem!=null){
				if(elem.hasOwnProperty('l')){
					console.log(elem.l);		
				}
				else
					console.log("object does not have l property");	
			}
			else	
				console.log("Null object");				

		}
	}
	else 
   		console.log("is neither an object nor an array");
}

check(ob);
check(arob);



