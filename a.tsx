const arr = [5, 3, 8, 4, 5, 7, 0,]
function sort(arr: number[]) {
    for (let i = 0; i < arr.length; i++){
        setTimeout(()=>console.log(arr[i]),arr[i])
    }
}