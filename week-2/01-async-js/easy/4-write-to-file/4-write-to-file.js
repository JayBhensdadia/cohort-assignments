const fs = require('fs');


function writeToFile(){
    return new Promise(function(resolve){
        fs.writeFile('week-2/01-async-js/easy/4-write-to-file/a.txt','hi, there. jay bhensdadia this side!',function(error,data){
            if(error){
                throw new Error();
            }else{
                console.log("file written successfully");
            }
        });
    });
}

async function main(){
    let data = await writeToFile();
    console.log(data);
}

main();