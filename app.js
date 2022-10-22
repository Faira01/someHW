const question1=[1,2,2,2,2,2,4]

function hasOddNumber(arr){
    return arr.some(function(i){
        return i % 2 !==0
    })
}

const question2=33321232131012

function hasAZero(num){
    const numsArr=Array.from(String(num))
    return numsArr.some(function(i){
        return i ==0
    })
}

const question3=[1,3,5,7]

function hasOnlyOddNumbers(arr){
    return arr.every(function(i){
        return i % 2 !== 0
    })
}

const question4=[1,2,3,1]

//Confused no work
function hasNoDuplicates(arr){
    return arr.every(function(i){
        return arr.indexOf(i) === arr.lastIndexOf(i)
    })
}

const question5=[
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]

function hasCertainKey(arr,find){
    return arr.every(function(i){
        return find in i
    })
}
function hasCertainValue(arr,val1,val2){
    return arr.every(function(i){
        return i[val1] === val2
    })
}

1