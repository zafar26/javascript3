// Include prompt module.
var prompt = require('prompt');

// This json object is used to configure what data will be retrieved from command line.
var prompt_attributes = [
    {
        // The fist input city is assigned to name variable.
        name: 'city',
    }   
];

// Start the prompt to read user input.
prompt.start();

// Prompt and get user input then display those data in console.
prompt.get(prompt_attributes, function (err, result) {
    
    var city = result.city;
        
    var weather = require('weather-js');
    
    // Options:
    // search:     location name or zipcode
    // degreeType: F or C
    
    weather.find({search: city +'IND', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
    
    console.log(JSON.stringify(result, null, 2));
    });
        
});