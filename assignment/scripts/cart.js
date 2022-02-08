console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []

function addItem(item) {
  basket.push(item);
  //console.log(`Inside 'addItem'`);//how do I add the "item" so it logs from inside the function?
  return true;
}
addItem('banana');

console.log(`Basket is ${basket}`);
console.log('Adding banana (expect true)', addItem());//how can I stop this from pushing Undefined to the array?
console.log(`Basket is now ${basket}`);

addItem(`tater tots`);
addItem(`ranch`);

console.log(`Basket is now ${basket}`);


function listItems(){
  //console.log(`inside listItems`);
  for (i = 0; i < basket.length; i++) {
    console.log(`'You have' ${basket[i]} 'in your basket.'`);
  }
}
listItems();






//
// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
//
// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
