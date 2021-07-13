var a=[1764,5671]
var k=0
while (k<a.length){
    sum=0
    while (a[k]>0){
      d=a[k]%10
      a[k]=Math.floor(a[k]/10) 
      sum+=d
    
    }
    console.log(sum)
    k++
} 
