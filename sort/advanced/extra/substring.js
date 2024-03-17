function strFind(input, find) {
    const inputArr = Array.from(input);
    const findArr = Array.from(find);

  
    

    for (let i = 0; i < inputArr.length - 1; i++) {
       let found = false;
        if (inputArr[i] === findArr[0]) {
            found = true;
            for (j = 1; j < findArr.length - 1; j++) 
                if (inputArr[i] !== findArr[j]) {
                    found = false;
                }
        }
        return found
    }
    
}

const str = "Hello World"

console.log(strFind(str, "He"))

