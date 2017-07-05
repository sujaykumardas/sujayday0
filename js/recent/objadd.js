var obj1={
	k1: "sujay",
	k2: "das"
};

obj1.k3="kumar";
document.write(obj1.k3);
obj1["k4"]="is";
document.write(obj1.k4);
document.write(obj1.k2);
delete obj1[k2];
document.write(obj1.k2);