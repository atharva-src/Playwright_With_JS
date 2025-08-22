// recursion --> recursion is a process in which a function calls itself 


function sumtoN(n){
    if(n===1)return 1;
return n+sumtoN(n-1)
}
console.log(sumtoN(5)) // 
console.log(sumtoN(3))

