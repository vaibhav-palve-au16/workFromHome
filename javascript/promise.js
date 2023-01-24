const data ={nameFirst:"vaibhav", lastName:"palve", rollNumber:12}
const callFunction = new Promise((resolve, reject) =>{
    if(data){
        resolve(data)
    }
    else{
        reject('reject')
    }
})
async function getName (value){
    return new Promise((resolve1, reject1) =>{
        if(value){
            const {nameFirst} =value;
            resolve1(nameFirst)
            console.log(nameFirst);
        }
        else{
            reject1('error')
        }
    })
}
async function getRollNumber (rollNumber) {
    return new Promise ((res, rej) =>{
        if(rollNumber) {
            res(rollNumber)
            console.log("rollnumber " + rollNumber);
        }
        else{
            rej("error in rollnumber")
        }
    })
}
callFunction.then((data)=>{
    console.log(data);
    getName(data)
    .then((nameFirst) =>{
        console.log(nameFirst +" name");
    }).catch((value) =>{
        console.log(value);
    });
    getRollNumber(data.rollNumber)
        .then((rollNumber)=>{
        console.log(rollNumber);
    }).catch((value) =>{
        console.log(value);
    });  
})
.catch((value) =>{
    console.log(value);
})
