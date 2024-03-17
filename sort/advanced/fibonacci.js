function fib (n) {
    const tmp = [];
    
    for (let i = 0; i <= n; i++) {
        if (i <= 1) {
            tmp.push(1)
        } else {
            tmp.push(tmp[i - 1] + tmp[i - 2])
        }       
    }
    return tmp    
}

function recursiveFib (n) {
    if (n <= 1) return 1
    return recursiveFib(n - 1) + recursiveFib(n - 2);
}

function printRecursiveFib(n) {
    const arr = [];
    for (let i=0; i<=n; i++) {
        arr.push(recursiveFib(i))
    }
    return arr
}

console.log(printRecursiveFib(5))
console.log("recursiveFib", recursiveFib(5))