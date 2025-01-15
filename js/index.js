// Prevent us from attempting to use variables
// that are not declared
"use strict";

// user is choosing an option from a zero-indexed menu in a console window.
const chooseFromMenu = function (
  num,
  useStrictEquality = false,
  verbose = false
) {
  if (num) {
    if (verbose) {
      console.log(`num: ${num}   typeof num: ${typeof num}`);

      let displayNum;
      typeof num === 'string' ? displayNum = `'${num}'` : displayNum = `${num}`;

      console.log(
        `Loose equality:  ${displayNum} == 0 : ${num == 0}
                  ${displayNum} == 1 : ${num == 1}
                  ${displayNum} == 2 : ${num == 2}
                  ${displayNum} == 3 : ${num == 3}`
      );
      console.log(
        `Strict equality: ${displayNum} === 0 : ${num === 0}
                  ${displayNum} === 1 : ${num === 1}
                  ${displayNum} === 2 : ${num === 2}
                  ${displayNum} === 3 : ${num === 3}`
      );
    }

    if (useStrictEquality) {
      if (num === 0) {
        alert("You chose option 0 (strict)");
      } else if (num === 1) {
        alert("You chose option 1 (strict)");
      } else if (num === 2) {
        alert("You chose option 2 (strict)");
      } else if (num === 3) {
        alert("You chose option 3 (strict)");
      } else {
        alert(`You chose an invalid option (strict)`);
      }
    } else {
      if (num == 0) {
        alert("You chose option 0 (loose)"); // this line cannot be reached.
      } else if (num == 1) {
        alert("You chose option 1 (loose)");
      } else if (num == 2) {
        alert("You chose option 2 (loose)");
      } else if (num == 3) {
        alert("You chose option 3 (loose)");
      } else {
        alert(`You chose an invalid option (loose)`);
      }
    }
  }
};

document
  .getElementById("submission-btn")
  .addEventListener("click", function () {
    let chosenOption = prompt("Pick a number between 0 and 3");
    let useStrictEquality = confirm("Use strict equality? (OK for yes, cancel for no)");
    chooseFromMenu(chosenOption, useStrictEquality, true);
  });

// i also want my answers to show up on the assignment page.
// i mean c'mon, plain text? what is this, 1986? :P
