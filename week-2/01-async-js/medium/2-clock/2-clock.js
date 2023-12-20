
setInterval(()=>{

    let date = new Date();
    let hour =  date.getHours();
    let minute =  date.getMinutes();
    let second = date.getSeconds();
    let amOrPm = "";
    if(hour >= 12 && minute > 0 ){
        amOrPm = "PM";
        if(hour > 12){ hour = hour - 12;}
    }else{
        amOrPm = "AM";
    }
    let time = `${hour} : ${minute} : ${second} ${amOrPm}`;
    console.log(time);

},1000);