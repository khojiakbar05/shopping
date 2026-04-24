// callbackni Asynchronousda korib chiqamiz:


/*   Asynchronous function:  
3ga bolinadi :   Callback    &     Asynch   &   Promise

      define       =>     call
    Callback            function
    asynch/await        then/catch
    promise             then/catch

*/


const list = [
    "be a good student",   // 0 - 20
    "choose right boss",   // 21 - 30
    "start your own business",   // 31 - 40
    "do what you are good at",   // 41 - 50
    "invest in young generation",   // 51 - 61
    "now do rest and enjoy your life"   // 61 
];



// define
// async  korinihida
/*
async function suggest(age) {
    if(typeof age !== 'number') throw new Error("Insert only number");
    else if(age >= 61) return list[5];
    else if(age >= 51) return list[4];
    else if(age >= 41) return list[3];
    else if(age >= 31) return list[2];
    else if(age >= 21) return list[1];
    else return list[0];
};
 */



// define
// primise korinishida
function suggest(age) {
    return new Promise((resolve, reject) => {
        if(typeof age !== 'number') reject("Insert only number");
        else if(age >= 61) resolve(list[5]);
        else if(age >= 51) resolve(list[4]);
        else if(age >= 41) resolve(list[3]);
        else if(age >= 31) resolve(list[2]);
        else if(age >= 21) resolve(list[1]);
        else resolve(list[0]);
    })
};



// then/catch
// call
suggest(45). then(data => {
    console.log("Result: ", data)
}). catch(err => {
    console.log("ERROR: ", err)
});


