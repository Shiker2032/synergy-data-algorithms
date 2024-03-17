const arr = [9, 8, 3, 7, 5, 6, 4, 1];

 function shellSort(toSort) {
    const arr = [...toSort];
    var n = arr.length;

    // Start with a big gap, then reduce the gap
    for (var gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
        // Do a gapped insertion sort for this gap size.
        for (var i = gap; i < n; i++) {
            // add arr[i] to the elements that have been gap sorted
            var temp = arr[i];
            var j;
            for (j = i; j >= gap && arr[j-gap] > temp; j -= gap)
                arr[j] = arr[j-gap];
 
            // put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
    }
    return arr;
};

const shellSorted =  shellSort(arr);
console.log("arr", arr)
console.log("Shell Sorted" ,shellSorted)

