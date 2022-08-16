let firstname : string = "gavin"
let age : number = 26
let active : boolean = true

//let names: string[] = [1,2,3,4] // gives us an error
let names: string[] = ["bobby","jennifer","lily"]

enum studentTypes {
    pending,
    active,
    almostdone,
    graduated,
    tas,
    teachers
}

let mystatus = studentTypes.graduated

// switch (Number(mystatus)) {
//     case Number(studentTypes.active):
//             console.log(" student is active ")
//         break;
//     case Number(studentTypes.graduated):
//             console.log("Student is graduated")
//         break;        
//     default:
//             console.log("?")    
// }

// console.log(mystatus)
// if (mystatus == studentTypes.graduated) {
// console.log(`the student is graduated `)
// }

// console.log(names)
// console.log(`my firstname is ${firstname}`)

// let code: string | number = 11
// code = "aa11"
// // code = false // error, not a string or number

// console.log(`my entry code is: ${code}`) 

function sum(arr: number[]) {
    return arr.length
    return arr.reduce((total: number, num: number) => total + num)
    // return arr.reduce((previousValue: number, currentValue:number)=> {return previousValue + currentValue})
}

let numbers: number[] = [1,2,3,4,5,6]
// console.log(sum(numbers))

let complexItem: any = {name: "Gavin"}

complexItem = {title: "professor"}
complexItem = "its a string"
complexItem = 22

// console.log("complexItem",complexItem)
enum bloodType {
    aPositive,
    bPositive,
    oPositive,
    oNegative,
}
interface human {
    name: string,
    age: number,
    height: number,
    bloodType: bloodType
}

const me : human = {
    name: "bobby",
    age: 26,
    bloodType: bloodType.bPositive,
    height: 6 *12
}