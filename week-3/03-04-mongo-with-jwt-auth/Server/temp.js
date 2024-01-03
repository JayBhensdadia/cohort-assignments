import jwt from 'jsonwebtoken';


const token = jwt.sign({username: "jay"}, "123");

try{

    const decoded = jwt.verify(token,"123");
    console.log(decoded.username);

}catch(error){console.log("error");}
console.log(token);