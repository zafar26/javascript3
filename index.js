const words = ["apple","banana","cat","dog","eagle"];



const repeat = () =>{

var guessWord = words[(Math.floor((Math.random() * Math.floor(words.length))))];

// console.log(guessWord);

var empty = "";
for (let i = 0; i < guessWord.length;i++){
    let randomNum1 = Math.floor(Math.random() * Math.floor(guessWord.length));
    let randomNum2 = Math.floor(Math.random() * Math.floor(guessWord.length));
    
    if (randomNum1 == i || randomNum2 == i){
        empty += "-"; 
    }
    else{
        empty += guessWord[i];
    }
    // console.log()
}
console.log(empty)

var word;

var prompt = require('prompt');

var prompt_attributes = [
    {
        name: 'word',

    }   
];




prompt.get(prompt_attributes, function (err, result) {
    
    word = result.word;
    if(word == guessWord){
        console.log("Yes")
    }
    else{
        console.log("NO");
    }
    // console.log(word);
});
prompt.start();

}
// console.log(word)

for (let i = 0; i <= 3; i++){
    repeat();
}