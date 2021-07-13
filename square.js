function sqr(num){
    var x={}
    for(let i=1;i<=num;i++){
        x[i]=i*i
        
    }
    console.log(x)
}
var readline=require("readline-sync")
var num=readline.question("enter the number")
sqr(num)