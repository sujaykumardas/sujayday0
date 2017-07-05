var obj1 = {
    "DOP":"manu",
    "Resolution":23,
    "sensor":"SE"
}

var obj2 = {
    "DOP":"mansa",
    "Resolution":22,
    "sensor":"PS"
}

var result = {}
for (x in obj1) { result[x] = obj1[x] + ', ' + obj2[x] }

document.write(result);