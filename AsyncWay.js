
// way of asynchrounus method 
const R=require('fs');
console.log('first staring poing');
var mm=R.readFile('./text1.txt','utf-8',function(err,result){ // here urf-8 is used to read file in text format otherwise it will yield some hexadecimal no
    if(err){
        console.log(err);
    }
    else console.log('Result 1 :',result);
});
 console.log('first first stoping point');
var ss=R.writeFile('text2.txt',"God is good",function(err,result){
    if(err)
    console.log(err);
    else 
    console.log('Done succesfully');
});
console.log('next starting poing');
