var list_question=["print type(type(int) ","L = ['a','b','c','d']\nprint(''.join(L))","chr(ord('A'))","y = 8\n z = lambda x : x * y\nprint (z(6))"]
var list_option=[["type 'int'","type 'type'","Error","0"],["Error","None","abcd","[‘a’,’b’,’c’,’d’]"],["A","B","a","Error"],["None of the above","14","64","48"]]
var list_fifty=[["type 'type'","type 'int'"],["None","abcd"],["A","Error"],["None of the above","48"]]
var answer=[2,3,1,4]
var fifty_answer=[1,2,1,2]
var i=0
var count=0
while(i<list_question.length){
    console.log(`${i+1} ${list_question[i]}`)
    var j=0
    while(j<list_option.length){
        console.log(`  ${j+1} ${list_option[i][j]}`)
        j++
    }
    var readlineSync=require("readline-sync")
    var user_q=readlineSync.questionInt("choose your option")
    if (user_q==answer[i]){
        console.log("your Answer is correct congrates")
        console.log("##---------------------***-----------------##")
    }
    else if(user_q==5050){
        if (count==0){
            var k=0
            while(k<list_fifty[i].length){
                console.log(`${k+1} ${list_fifty[i][k]}`)
                k++
            }
            count++
            var readlineSync=require("readline-sync")
            var user_fifty=readlineSync.questionInt("choose your fifty option")
            if (user_fifty==fifty_answer[i]){
                console.log("congrates")
            }
            else{
                console.log("so sad your option is wrong")
                console.log("quit")
                break
            }
            
        }
        else{
            console.log("5050 used")
            var readlineSync=require("readline-sync")
            var user_1=readlineSync.questionInt("choose your fifty option")
            if(user_1==answer[i]){
                console.log("shi jwab")
            }
            else{
                console.log("glat jwab")
                break
            }
        }

    }
    else{
        console.log("so sad wrong")
        console.log("jana padega")
        break
    }
    i++
}