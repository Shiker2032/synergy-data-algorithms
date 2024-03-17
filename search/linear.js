const arr = [9, 8, 3, 7, 5, 6, 4, 1];

function linearSearch(arr, target) {
    const n = arr.length
    let foundIdx = -1;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] == target) {
            return i
        } else {
            foundIdx = i;
        }
    }
    if (idx == -1) {
        console.log("no such target");
        return
    } else { return i; }

}

console.log(linearSearch(arr, 7)) 