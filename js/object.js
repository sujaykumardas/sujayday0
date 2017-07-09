function RJ(nm,age,tim)
{
	this.nm=nm;
	this.age=age;
	this.tim=tim;
	
}

function tim(mrshft,evnshft)
{
	this.mrshft=mrshft;
	this.evnshft=evnshft;
}

var rj1tm = new tim('9am','8pm');

var RJ1 = new RJ('sujay', 24, rj1tm);
//var RJ2 = new RJ('shanu', 25, rj2tm);
//var RJ3 = new RJ('prem', 45, rj3tm);





document.writeln(RJ1.tim.mrshft); 
