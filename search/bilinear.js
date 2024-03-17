


const arr = [9, 8, 3, 7, 5, 6, 4, 1];

function bilinearSearch (arr, target) {
    arr.sort();    
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
   
        let middle = Math.round(left + right / 2) 
        if (arr[middle] == target) {
            return middle
        } else if (arr[middle] < target) {
            left = middle + 1;     
        } else {
            right = middle - 1;
        }
        
  
    }   
    return -1; 
}

console.log(bilinearSearch(arr, 4))
