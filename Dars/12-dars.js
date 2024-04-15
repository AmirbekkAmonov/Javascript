function max(arr) {
    arr.sort((a, b) => a - b)
    if (arr[0] == arr[arr.length - 1]) {
        return arr;
    }
    let arr1 = []
    for (let i = 0; i < arr.length / 2; i++) {
        arr1.push(arr[i])
    }
    return arr;
}
console.log(max([9, 8, 3, 4, 5, 6]))
console.log(max([2, 2]))










