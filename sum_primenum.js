a = []
var st="hello"
b=""
var i=0
k=[]
while(i<st.length){
    if(st[i]=="a" || st[i]=="e" || st[i]=="i" || st[i]=="o" || st[i]=="u" ){
      var indexFinder=st.indexOf(st[i])
      
      var mul_pos=indexFinder*100
    
      function sum(num) {
        let i = 1;
        let sum = 0;
        while (i <= num) {
          if (isPrime(i)) {
            sum += i;
          }
          i++;
        }
        a.push(sum);
        var k=0
        while (k<a.length){
          Sum=0
            while (a[k]>0){
              d=a[k]%10
              a[k]=Math.floor(a[k]/10) 
              Sum+=d
            }
            k++      
        }
        console.log(Sum)
      }
      function isPrime(x) {
        for (let i = 2; i < x; i++) {
          if (x % i === 0) return false;
        }
        return x !== 1 && x !== 0;
      }
      sum(mul_pos)
      m=0
    
      while(m<st.length){
        if(st[m]==="e" || st[m]==="o"){
          if(!(k.includes(st[m]))){
            var s=st.replace(st[m], Sum)
            k.push(s)
          }
          
          
        }
        console.log(k,"jjjj")
        m++
      }
      
      


    }
    i++
}

