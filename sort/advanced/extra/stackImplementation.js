class Stack  {
    constructor() {
        this.items = [];
    }

    pushElement(element) {
        this.items.push(element);
      
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        const n = this.items.length
        return this.items[this.size() - 1]
    }    

    isEmpty() {
        return this.items.length === 0
    }

    clear() {
        this.items = [];
    }

    size() {
        return this.items.length
    }
}

function decimalToBinary (num) {
    const remStack = new Stack();
    let rem = 0;
    let binaryString = "";

    tmp = [];

    while (num > 0) {
        rem = Math.floor(num / 2);     
        remStack.pushElement(rem);
        num = Math.floor(num / 2)
    }

    while (remStack.size() !== 0) {
       binaryString += remStack.pop().toString();
    }

    return binaryString

}

console.log(decimalToBinary(128));

