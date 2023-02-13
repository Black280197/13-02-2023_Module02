const inventory = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
];

let totalMachineValue = () => {
    let sum = 0;
    for (let i of inventory) {
        if (i.type === "machine") {
            sum += i.value;
        }
    }
    return sum;
}

console.log(totalMachineValue());
