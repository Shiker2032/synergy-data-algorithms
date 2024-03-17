function sieve(num) {
    const bools = Array(num + 1).fill(true);
    const primes = [];
    bools[0], bools[1] = false;

    for (let i = 2; i <= num; i++) {
        if (bools[i] === true) {
            let j = i * 2;
            primes.push(i);

            while (j <= num) {
                bools[j] = false;
                j += i;
            }
        }
    }
    return primes
}

console.log(sieve(50))