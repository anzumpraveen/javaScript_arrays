var a1 = [1,2,3,7,9,2,4,4,13,45,78,89];
var a2 = [1,2,3,7,9,2,4,4,13,45,78,89];
console.log(JSON.stringify(a1)==JSON.stringify(a2));


// according to indexing
for(var i=0;i<a1.length;i++){
    if (a1[i]!=a2[i]){
        console.log(false)
    }
    else{
        console.log(true)
    }
}

