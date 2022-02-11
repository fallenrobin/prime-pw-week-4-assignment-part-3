console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []

function addItem(item) {
  basket.push(item);
  //console.log(`Inside 'addItem'`+item);//figured it out=>how do I add the "item" so it logs from inside the function?
  return true;
}
addItem('a banana');

console.log(`Basket is ${basket}`);
console.log('Adding hot dogs (expect true)', addItem('some hot dogs'));//how can I stop this from pushing Undefined to the array?
console.log(`Basket is now ${basket}`);
addItem(`a bag of tater tots`);
addItem(`a bottle of ranch`);
console.log(`Basket is now ${basket}`);


function listItems(array){
  //console.log(`inside listItems`);
  for (i = 0; i < array.length; i++) {
    console.log(`You have ${array[i]} in your basket.`);
    //return (array[i]);//<=using this limits the log to the first item... why?
    //return true; same issue^
    //return [i]; same issue^
    //return array; //same issue^
  }
  if (array.length===0) {
    console.log(`Your basket is empty.`);
  }
}

listItems(basket);

function empty(array){
  console.log(`Basket has been emptied.`);//the console.log works up here
  //console.log(`inside empty`);
  return array.length = 0;
}

empty(basket);
console.log(basket);
addItem('kale');
console.log(`Basket contains ${basket}`);
empty(basket);
listItems(basket);


// ### Stretch Goals
// Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.
//
// __Using functions in other functions!__
//
// 1. Add a global `const` named `maxItems` and set it to 5.
const maxItems = 5;
// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)
function isFull(cart){
    if (cart.length<=maxItems) {
      console.log(`Your basket is not full.`);
      return false;//ie the cart is NOT full
    }//end if (false = cart not full)
    else {
      console.log(`Your basket is full.`);
      return true;
    }//end else (true = cart full)
}//end isFull
isFull(basket);
// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`
//
// __Using Array built-in functions!__
//
// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found
//
// ## Assignment Submission
// Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!
//
// **REMINDER:** Make sure to answer the Slack discussion question for this week!
