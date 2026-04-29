// callbackni Asynchronousda korib chiqamiz:


/*   Asynchronous function:  
3ga bolinadi :   Callback    &     Async   &   Promise

      define       =>     call
    Callback            function
    asynch/await        then/catch
    promise             then/catch

*/


// Callback => function
// define
function division(a, b, callback) {
    if(b === 0) {
      callback("Error: Division by zero", null);
      // return "Error: Division by zero";
    } else {
      callback(null, a % b);
      // return a % b;
    }
  }
  
  // Promise hell
  division1(10, 3).then(data => {
    console.log("Result: ", data)
    console.log("......")

    division1(10, 4).then(data => {
        console.log("Result: ", data)
        console.log("......")

        division1(20, 7).then(data => {
            console.log("Result: ", data)
            console.log("......")

        }).catch(err => {
            console.log("Error division: ", err)
        })
    }).catch(err => {
        console.log("Error division: ", err)
    })
}).catch(err => {
    console.log("Error division: ", err)
})


  // call  / setTimeOut
//   console.log("Passed here A")

//   const result = division(4, 3, (err, data) => {
//      if(err) console.log("ERROR: ", err);
//      else { 
//         setTimeout(function() {
//             console.log("Passed here B")
//             console.log("RESULT: ", data);
//             console.log("...");
//         }, 5000)
//      }
//   });
//   console.log("Passed here C")

// setInterval
//   const result = division(4, 3, (err, data) => {
//     if(err) console.log("ERROR: ", err);
//     else { 
//        setInterval(function() {
//            console.log("RESULT: ", data);
//            console.log("...");
//        }, 2000)
//     }
//  });


// // Asynch / await => then/catch
// // Asynch / await da setTimeOut va setInterval ishlamaydi!!!
// async function division1(c, d) {
//     if(d === 0) {
//         throw new Error("Not divided By Zero ", null)
//     } else {
//         setTimeout(function() {
//             return null, c % d
//         });
//     }
// }

// // call then/catch  
// division1(10, 3).then(data => {
//     console.log("Result: ", data)
//     console.log("......")
// }).catch(err => {
//     console.log("Error division: ", err)
// })\





// promise  => then/catch
// setInterval -> faqat bir marta javob qaytaradi 
function division1(c, d) {
    return new Promise((resolve, reject) => {
        if(d === 0) {
            reject("Not divided By Zero ", null)
        } else {
            setTimeout(function() {
                resolve (c % d)
            }, 3000);
        }
    })
}
 
// call then/catch
division1(10, 3).then(data => {
    console.log("Result: ", data)
    console.log("......")
}).catch(err => {
    console.log("Error division: ", err)
})
