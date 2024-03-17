const arr = [9, 8, 3, 7, 5, 6, 4, 1];

export function quickSort (arr) {
    const n = arr.length;    
    const pivot = arr[0];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }
return [...quickSort(leftArr), ...quickSort(rightArr)]


}

console.log("test", quickSort(arr))