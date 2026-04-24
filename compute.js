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
const result = division(4, 2, (err, data) => {
   if(err) console.log("ERROR: ", err);
   else {
    console.log("RESULT: ", data);
    console.log("...");
   }
});




// console.log(result);









