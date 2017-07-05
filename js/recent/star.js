var j=1,i=10,k,m,sp;


for(k=0;k<i;k++,j=j+2){
	sp=(i-j-1)/2;

	for(m=0;m<sp;m++){
		document.write(" ");
	}
	for(m=0;m<j;m++){
		document.write('*');
	}
	for(m=0;m<sp;m++){
		document.write(" ");
	}
	document.write("<br>");
}

