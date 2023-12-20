let n = 10;

let timer = setInterval(()=>{
    if(n===0){
        console.log(n);
        console.log("Times UP!");
        clearInterval(timer);
    }else{
        console.log(n);
        n--;
    }
},1000);

