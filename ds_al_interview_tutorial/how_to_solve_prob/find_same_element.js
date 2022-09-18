const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'a'];

// O(arr1 * arr2) -> time complexity
// O(1)           -> space complexity
function findCommonItem(arr1, arr2){                
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]) return true;
        }
    }
    return false;
}

// console.log(findCommonItem(arr1, arr2));


// O(arr1 + arr2) -> time complexity
// O(arr1)        -> space complexity
function findCommonItem2(arr1, arr2){               
    // Loop through the first array and create an object where properties === items in the array
    let map = {}
    for(let i = 0; i < arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i]
            map[item] = true;
        }
    }
    // Loop through the second array and check if an item from the second array exists on the created object
    for(let j = 0; j < arr2.length; j++){
        if(map[arr2[j]]) return true;
    }
    return false;
}

// console.log(findCommonItem2(arr1, arr2));


function findCommonItem3(arr1, arr2){
    return arr1.some(item => arr2.includes(item));
}

console.log(findCommonItem3(arr1, arr2));