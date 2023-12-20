const fs = require('fs');

let data = "";

function fileReader(){
    return new Promise(function(resolve){
        fs.readFile('week-2/01-async-js/medium/1-file-cleaner/a.txt','utf-8',function(error,data){
            resolve(data);
        });
    });
}

function fileWriter(){
    return new Promise(function(resolve){
        fs.writeFile('week-2/01-async-js/medium/1-file-cleaner/a.txt',data,function(error){
            if(error){
                throw new Error();
            }else{
                console.log("file cleaned successfully!");
            }
        });
    });
}

async function cleanFile(){
    data = await fileReader();
    data = data.replace(/\s+/g, ' ').trim();
    await fileWriter();

}


cleanFile();