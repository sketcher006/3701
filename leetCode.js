// array = [11, 12, 13, 14]
// target = 24

function check1(arr, target){
    
    for (let i = 0 ; i < arr.length-1 ; i++){
        for (let j = i ; j < arr.length ; j++){
            if (arr[i] + arr[j] == target){
                console.log('tagert reached', arr[i] + arr[j])
                return [i, j]
            }
        }
    }
    return [0, 0] // no results
}

function check2(arr, target){
    const dict = {}
    const l = arr.length
    for(let i = 0 ; i < l ; i++){
        const v = arr[i]
        const d = target-v
        if(d in dict){
            return [dict[d], i]
        } else {
            if(!(v in dict)){
                dict[v] = i
            } 
        }
    }
    return [-1, -1]
}

myArray = [11, 12, 13, 14, 15, 16, 17, 18]
myTarget = 29
console.log('check1 - indexes:', check1(myArray, myTarget))
console.log('check2 - indexes:', check2(myArray, myTarget))