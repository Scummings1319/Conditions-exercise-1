/*let actualtemp= 17
let desiredtemp= 80

if(actualtemp > desiredtemp){
    console.log("run A/C")
} else if (actualtemp < desiredtemp){
    console.log ("run heat")
}else{
    console.log("standby")
}*/


let name1= "Samantha"
let name2= "Paige" 
let name3= "Daniel"

if(name1.length > name2.length && name1.length > name3.length){
    console.log(`${name1} is the longest name!`);
}else if(name2.length < name1.length && name2.length < name3.length){
    console.log(`${name2} has the SHORTEST name!`);
}else(name3.length > name2.length && name3.length < name1.length);
console.log(` ${name3} has the second longest name!`); 
