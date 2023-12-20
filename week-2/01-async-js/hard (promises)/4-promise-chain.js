/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,1000,"waited for 1 second");
    });
}

function waitTwoSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,2000,"waited for 2 second");
    });
}

function waitThreeSecond() {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,3000,"waited for 3 second");
    });
}

function calculateTime() {
    

    const startTime = new Date().getTime();

    waitOneSecond().then(()=>{
        console.log("1 down");
        return waitTwoSecond();
    }).then(()=>{
        console.log("2 down");
        return waitThreeSecond();
    }).then(()=>{
        console.log("3 down");
        const finishTime = new Date().getTime();
        console.log("it took " + (finishTime - startTime)/1000 + " secods");
    });

    
   
}

calculateTime();