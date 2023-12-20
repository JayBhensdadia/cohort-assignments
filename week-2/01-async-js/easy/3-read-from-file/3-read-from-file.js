const fs = require('fs');


function readFromFile(){
    return new Promise(function(resolve){
        fs.readFile('week-2/01-async-js/easy/3-read-from-file/a.txt','utf-8',function(error,data){
            resolve(data);
        });
    });
}

async function main(){
    let data = await readFromFile();
    console.log(data);
}

main();









