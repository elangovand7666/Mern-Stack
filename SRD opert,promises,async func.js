//spread,rest,destructing,callback,callback hell,promises,async function

/*function abc(a,b){
    return a+b;
}
console.log(abc(5,6))

function abc1(){
    console.log(5+6)
}
abc1()

//arrow function 
const l=(a,b)=>{
    return a+b
}
console.log(l(5,6))

//spread operator
let l1=[1,2,3]
let l2=[...l1]
l2[1]=10
console.log(l2)
console.log(l1)

//spread operator to combine
let l21=[1,2,3,4]
let l22=[5,6,7,8]
console.log(...l21,...l22)

//rest operator in function
function rest(x,...val){
    console.log(x)
    console.log(val)
}
rest(1,2,3,4,5,6)*/

// let l23={
//     name2:"elango",
//     dept:"csd",
// };
// let l24={
//     clg:"KEC",
//     place:"erode",
// };
// let l25={...l23,...l24}
// console.log(l25)

//Destructing in Operators
// let l=[1,2,3,4,5,6,7,8]
// let [a,b,c,d,...e]=l
// console.log(e)

/*let l1={
    name:"elango",
    clg:"KEC",
    place:'erode',
};
let {name,age,place}=l1;
console.log(name)

//callback in function
function dog(callback){
    setTimeout(()=>{
        console.log("This is dog")
        callback();
    },2000)
    //callback();
}
function cat(){
    console.log("This is cat")
}
dog(cat)*/


//callback hell
/*function attendence(lunch){
    setTimeout(()=>{
        console.log("Attenedance is present")
        lunch();
    },3000)
}
function lunch(gtoh){
    setTimeout(()=>{
        console.log("I am eating")
        gtoh();
    },3000);
}
function gtoh(){
    console.log("I am going")
}
attendence(()=>{
    lunch(()=>{
        gtoh();
    });
});*/

//promise
/*
function attendence(){
    return new Promise((resolve,reject)=>{
        let At=true;
        if(At)
        {
            resolve("I am Present");}
        else{
            reject("I am Absent")
        }
    })
}
function lunch(){
    return new Promise((resolve,reject)=>{
        let lu=true;
        if(lu){
            resolve("I am eating");
        }
        else{
            reject("I am not eating");
        }
    })
}
function gto(){
    return new Promise((resolve,reject)=>{
        let g=true;
        if(g){
            resolve("I am going to home")
        }
        else{
            reject("I am not going")
        }
    })
}

attendence().then((value)=>{console.log(value); return lunch();})
            .then((value)=>{console.log(value); return gto();})
            .then((value)=>{console.log(value); })
            .then(()=>{console.log("Day completed")})
            .catch((value)=>{console.error(value)})
            .catch((value)=>{console.error(value)})
            .catch((value)=>{console.error(value)})
*/
//async function with promises
/*function walk(){
    return new Promise((s,f)=>{
        setTimeout(()=>{
        let a=1
        if(a==1){
            s("Success")
        }
        else{
            f("Fail")
        }
    },3000)
    })
}
function run(){
    return new Promise((s,f)=>{
        setTimeout(()=>{
        let a=1
        if(a==1){
            s("Yes")
        }
        else{
            f("No")
        }
    },2000)
})
}
function sleep(){
    return new Promise((s,f)=>{
        setTimeout(()=>{
        let a=1
        if(a==1){
            s("What")
        }
        else{
            f("Why")
        }
    },2000)
})
}
async function Tell(){
    try{
        let a=await walk()
        console.log(a)
        let b=await run()
        console.log(b)
        let c=await sleep()
        console.log(c)
    }
    catch(error){
        console.error(error)
    }
}
Tell()
*/


//callback Hell
function filea(fileb,a){
    setTimeout(()=>{
        console.log(`file is being processed ${a}`)
    },2000)
    fileb();
}
function fileb(filec,a){
    setTimeout(()=>{
        console.log(`file is being download ${a}`)
    },2000)
    filec();
}
function filec(a){
    setTimeout(()=>{
        console.log(`file is download ${a}`)
    },2000)
}
var a="abc"
filea((a)=>{
    fileb((a)=>{
        filec(a)
    })
})


//callback
function f1(f2){
    setTimeout(()=>{
        console.log(`${a} is processing`)
    },2000)
    setTimeout(()=>{
        console.log(`${a} is processes`)
    },2000)
    f2();
}
function f2(){
    setTimeout(()=>{
        console.log(`${a} is downloaded`)
    },2000)
}
var a="elango"
f1(f2)
