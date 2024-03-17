const arr = [9, 8, 3, 7, 5, 6, 4, 1];

function mergeSort (leftArr, rightArr) {    
    //place two merged subLists
    const result = [];

    //Track subarray indexes
    let iL = 0;
    let iR = 0;

    while (iL < leftArr.length && iR < rightArr.length ) {
        if (leftArr[iL] < rightArr[iR]) {
            result.push(leftArr[iL])
            iL++;
        } else {
            result.push(rightArr[iR])
            iR++;
        }
    }

    while (iL < leftArr.length) {
        result.push(leftArr[iL])
        iL++;
    }
    while(iR < rightArr.length) {
        result.push(rightArr[iR])
        iR++;
    }
    return result
}

function mergeSortRecursive (arr) {
    const n = arr.length

    if (n == 1) {
        return arr;
    }

    const mid = Math.floor(n/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, n);

    return mergeSort(mergeSortRecursive(left), mergeSortRecursive(right))
}

console.log("mergeSort", mergeSortRecursive(arr))


 
