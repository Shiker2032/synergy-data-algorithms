const unsorted = Array.from({length: 10}, () => Math.floor(Math.random() * 100));


function bubbleSort (inputArr) {
    
    for (i = 0; i<unsorted.length; i++) {
        for (j = 0; j < unsorted.length - 1; j++) {
            const left = unsorted[i];
            const right = unsorted[j]
            if (left < right) {
                const tmp = unsorted[i]
                unsorted[i] = unsorted[j]
                unsorted[j] = tmp;
            }
        }
    }
    return inputArr
}

function shakerSort (inputArr) {
    const n = inputArr.length
    let sorted = false;
    while(!sorted) {
        sorted = true;
        for (i = 0; i < n; i++) {
            if (inputArr[i] > inputArr[i+1]) {
                const tmp = inputArr[i]
                inputArr[i] = inputArr[i+1]
                inputArr[i+1] = tmp;
                sorted = false;
            }
        }
        if (sorted) break
        sorted = true;

        for (j = n - 1; j > 0; j--) {
            if (inputArr[j] > inputArr[j-1]) {
                const tmp = inputArr[j]
                inputArr[j] = inputArr[j-1]
                inputArr[j-1] = tmp;
            } 
        }
    }



    return inputArr;    
}

function insertionSort (inputArr) {
    const n = inputArr.length
    for (i = 1; i < n; i++) {
        let j = i - 1;
        const current = inputArr[i]
        while (j>=0 && inputArr[j] > current) {
            inputArr[j+1] = inputArr[j];
            j--;
        }
        inputArr[j+1] = current
    }
    return inputArr
}

[5,3,6,2,7,4]

// console.log("unsorted", unsorted)
// console.log("sorted-bubble", bubbleSort(unsorted))
// console.log("shaker-sort", shakerSort(unsorted))

console.log("insertion-sort", insertionSort(unsorted))

