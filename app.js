var t1=require('./t1');
const car = require('./t2');
var t2=require('./t2');
car(t1.peter) // calling function car in t2.js file because we have access to the function
car(t1.sami)

var os=require('os');
var m={  // creating object
    name:os.uptime(),
    release: os.release(),
     toalMemory:os.totalmem(),
     freeMemory:os.freemem()
}
console.log(m);
var path=require('path');

console.log(path.sep);
// var {readFileSync,writeFileSync, readFile}=require("fs");
// var read=readFileSync('./text1.txt','utf-8');
// console.log(read);
const R=require('fs');
console.log('first staring poing');
var mm=R.readFile('./text1.txt','utf-8',function(err,result){ // here urf-8 is used to read file in text format otherwise it will yield some hexadecimal no
    if(err){
        console.log(err);
    }
    else console.log('Result 1 :',result);
});
 console.log('first stoping point');
var ss=R.writeFile('text2.txt',"God is good",function(err,result){
    if(err)
    console.log(err);
    else 
    console.log('Done succesfully');
});
console.log('next starting poing');
