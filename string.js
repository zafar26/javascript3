// Write a function to manipulate the provided string
// 1. Padded Number
// Pad given single numbers in array to look like "10", "05", "16", "02"

const nums = ['2', '4', '25', '10', '3'];
const paddedNum = text => {
//   Insert function
    var arr = [];
    var s = '';
    const repeat = nums.forEach((element) => { 
    if (element.length > 1){
        arr.push(element);
    }
    else{
    s = '0'+element
    arr.push(s);
    }
   }); 
return arr;

};
// console.log(paddedNum(nums))
  



// 2. Camel-to-Title
// Convert a given sentence from camelCase to Title Case
const camelCase = "the simplest Things in LIFE are always The best"

console.log(camelCase);

const titleCase = text => {
//   Insert function
    var arr = [];
    var s = "";
    const splitted = camelCase.split(" ");

console.log(camelCase.replace(/(\b[a-z])/g, (match) => match.toUpperCase()))

};
titleCase(camelCase)


// 3. Title-to-Camel
// Convert the Title Case back to camelCase
const newTitle = "These Words Should Go In Pairs"
console.log(newTitle)
const newCamel = text => {
//   Insert function
console.log(newTitle.replace(/(\b[A-Z])/g, (match) => match.toLowerCase()))

}
newCamel(newTitle)


// 4. Pig Latin
// Convert any word to Pig Latin, see how to convert here => https://en.wikipedia.org/wiki/Pig_Latin
const word = "hamlet"
const pigLatin = text => {
//   Insert function
var w = word[0];

console.log(word.replace(/(\b[a-z])/g, "") + w +"ay")

}
pigLatin(word);
