let userInput = prompt(
    'Please enter what you would like to order, each item separated by commas.'
)

const flavor = {
    type: userInput,
}

// using the user Input to give attributes to properties, then converting object into array

for(const type in flavor){
    console.log('type: ',flavor[type]);
}

const type = Object.values(flavor);

// splitting and parsing array, pushing new items into array

const flavorTypes = userInput.split(",");

for (let i = 0; i < flavor.length; i++) {
    const str = flavor[i];
    const number = parseInt(str);
    flavor.push(type);
}

console.log(flavorTypes)


// I found this code from https://dinma.medium.com/counting-duplicate-values-in-javascript-arrays-b2432f64edf9
// I changed it to work with this to count each item

/* This code takes the items from the array above, dumps it into an empty Object using an arrow function,
then assigns the value of 1 to each item, if it find more than 1 of an item,
it adds 1 to the value, keeping track of how many times something is in the array.
after the values are assigned, it returns them so they can be console logged as an Object. */

const countItems = (flavorTypes) => {
    const counts = {};
    flavorTypes.forEach((type) => {
        if (!counts[type]){
            counts[type] = 1;
        } else {
            counts[type]++;
        }
    });
    return counts;
}
const result = countItems(flavorTypes);
console.log(result);
