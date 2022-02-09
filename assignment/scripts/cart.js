console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []

function addItem(item) {
  basket.push(item);
  console.log(`Inside 'addItem'`+item);//figured it out=>how do I add the "item" so it logs from inside the function?
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
    console.log(`You have ${basket[i]} in your basket.`);
    //return (array[i]);//<=using this limits the log to the first item... why?
    //return true; same issue^
    //return [i]; same issue^
    //return array; //same issue^
  }
}
listItems(basket);

function empty(array){
  console.log(`Basket has been emptied.`);//the console.log works up here
  //console.log(`inside empty`);
  return array.length = 0;
  //So, does the Return have to be the last thing in a function??
  //console.log(`Basket is now`, basket);//this won't work if after the Return
}

empty(basket);
//console.log(`The basket has ${basket}items`);// This prints as The basket has items
console.log(basket);

addItem('kale');
console.log(`Basket is now ${basket}`);
empty(basket);
listItems(basket);
