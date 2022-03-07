var zipCode = '63031'; 
var apiKey = 'a0662d01d5cdf2c442c51379cb018b54';

fetch('https://api.openweathermap.org/data/2.5/weather?zip='.concat(zipCode, ',us&appid=', apiKey))
 .then(response => response.json())
 .then(data => console.log(data));
 
 