// consume means to run 
let backend = (num) => {
 const checker = new Promise((resolve, reject) => {
    
    if(num % 2 === 0 ) {
        resolve('even')
    } else {
        reject('odd')
    }
 })   
 return checker
}
const holder = (num) => {
    backend(num).then((message) => {
        console.log(`Resolved ${num} is ` + message)
    }).catch((message) => {
        console.log(`Rejected ${num} is ` + message)
    });
}
holder(1)
holder(2)

let await = (num) => {
    const checker = new Promise((resolve, reject) => {
     setTimeout(() => { 
         if(num % 2 === 0 ) {
           resolve('even')
       } else {
           reject('odd')
       }
     }, 2000)  
       
    })   
    checker.then((message) => {
        console.log(`Resolved await ${num} is ` + message)
    }).catch((message) => {
        console.log(`Rejected await ${num} is ` + message)
    })
}   
await(3);
await(4);


