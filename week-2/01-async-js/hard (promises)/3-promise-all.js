/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
    const p1 = waitOneSecond();
    const p2 = waitTwoSecond();
    const p3 = waitThreeSecond();

    const startTime = new Date().getTime();

    Promise.all([p1,p2,p3]).then((values)=>{
        const finishTime = new Date().getTime();
        console.log(values);

        console.log("it took " + (finishTime - startTime)/1000 + " seconds");
    });
}

calculateTime();