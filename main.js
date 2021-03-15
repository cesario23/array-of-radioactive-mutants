/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd (arr1){
arr1.push ('Colin');
}
function addMeToStart (arr1){
arr1.unshift ('Colin');
}
function changeLast (arr1, newValue){
for (let i = 0; i < arr1.length; i++){
arr1 [arr1.length -1] = newValue;
}
}
function changeAllValuesTo (arr1, value){
for (let i = 0; i < arr1.length; i++){
  arr1 [i] = value;
}
}

function oddOrEven (arr1){
  for (let i = 0; i < arr1.length; i++){
    if (arr1 [i] % 2 !== 0){
      arr1 [i] = 'odd';
    } else {
      arr1 [i] = 'even'
    }
  }
}


function changeNextThreeToValue (arr1, index, value){
for (let i = index; i < arr1.length; i+2){
arr1 [i] = value;
}
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
