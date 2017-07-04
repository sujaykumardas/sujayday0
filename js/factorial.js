var welmsg;
welmsg="welcome to factorial programming"
document.writeln(welmsg); 

var i, no, fact;
no=5;
fact=1;

for(i=1; i<=no; i++)  
{
fact= fact*i;
} 

document.writeln(fact); 

 welmsg="welcome to reversing of string"
document.writeln(welmsg); 

var str=['sujay','kumar','das'];
var rev=[];
no=str.length;
for(i=0;i<no;i++)
{
	rev[no-i-1]=str[i];
}
	
document.writeln(rev); 

