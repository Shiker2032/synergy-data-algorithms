function factorial (a) {
    if (a <= 0) return 1;
    return a * factorial(a - 1);
}
console.log("factorial", factorial(5))