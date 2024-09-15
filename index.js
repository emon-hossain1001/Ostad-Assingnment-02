// question no 1
function calculateDifference(a,b){
    if(a>b){
        return a-b;
    } else {
        return b-a;
    }
}

// question no 2
function isOdd(n){
    return n%2===1?true:false;
}

// question no 3
function findMin(ara) {
    const min = Math.min(...ara);
    return min;
}

//question no 4
function filterEvenNumbers(ara) {
    let newAra = [];
    for(const ar of ara) {
        if(ar%2==0){
            newAra.push(ar);
        }
    }
    return newAra;
}

// question no 5
function sortArrayDescending(ara) {
    ara.sort((a,b) => b-a)
    return ara;
}

// question no 6
function lowercaseFirstLatter(str) {
    let newStr;
    newStr = str.charAt(0).toLowerCase()+str.slice(1);
    return newStr;
}

// question no 7
function countVowels(str) {
    let ans = str.toLowerCase();
    let count = 0;
    for(const a of ans){
        if(a==='a'||a==='e'||a==='i'||a==='o'||a==='u') {
            count++;
        }
    }
    return count;
}

// question no 8
function findAverage(ara) {
    let sum = 0;
    let count = 0;
    for(ar of ara) {
        sum += ar;
        count++;
    }
    return sum/count;
}
