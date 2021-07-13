arr=[[31,228,16],[21,23,75],[29,76,1]]
var i=0
var new_arr=[]
while(i<arr.length){
    var j=0
    var max=0
    while (j<= arr[i].length){
       if(max<arr[i][j]){
           max=arr[i][j]       
       }
       j++     
    } 
    new_arr.push(max)
    i++ 
}
console.log(new_arr)









