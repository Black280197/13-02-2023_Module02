class StopWatch {
    /*private starTime;
    private endTime;*/
    constructor() {
        this.starTime = new Date();
        this.endTime = new Date();
    }
    start() {
        this.starTime = new Date();
    }
    stop() {
        this.endTime = new Date();
    }
    getElapsedTime = () => {
        return this.endTime - this.starTime;
    }
}

const count = new StopWatch();

count.start();
function selectionSort(arr) {
    let currentValueNewIndex;
    for (let i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (let j = i +1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            let temp = arr[i];
            arr[i] = arr[currentValueNewIndex];
            arr[currentValueNewIndex] = temp;
        }
    }
    return arr;
}

const arr = [];
for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}
console.log(selectionSort(arr));

count.stop();

console.log(count.getElapsedTime());
