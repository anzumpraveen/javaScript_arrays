var arr=[1,2,3,4,5]
var i=0
var a=[]
var b=[]
while(i<arr.length){
    if (arr[i]<=3){
        a.push(arr[i])
    }
    else{
        b.push(arr[i])
    }
    i++
}
console.log(a)
console.log(b)