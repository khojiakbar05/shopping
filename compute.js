/*   callback function

define => call
callback => function


*/



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

// call
// Callback Hell
division(10, 3, function (err, data) {
   if(err) console.log("ERROR: ", err);
   else {
    console.log("RESULT: ", data);
    console.log("...");

    division(10, 4, function (err, data) {
      if(err) console.log("ERROR: ", err);
      else {
       console.log("RESULT: ", data);
       console.log("...");

       division(20, 7, function (err, data) {
        if(err) console.log("ERROR: ", err);
        else {
         console.log("RESULT: ", data);
         console.log("...");
        }
     });
      }
   });
   }
});




// console.log(result);













