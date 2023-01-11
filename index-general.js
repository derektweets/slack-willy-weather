// Call Willy Weather API
let request = require('request');
const dayjs = require('dayjs');


let apiKey = process.env.WILLY_TOKEN || 'MWI0ZGVmNGU3NGRmYjk2MTQwZjVkNT';
let locationId = '4988'; //Bondi
let units = 'units=amount:mm,distance:km,speed:knots,swellHeight:ft,temperature:f,tideHeight:m,pressure:hpa';
let url = 'https://api.willyweather.com.au/v2/'
	+ apiKey 
	+ '/weather/summaries.json?'
	+ 'ids=' +locationId 
	;

request(url, function (err, response, body) {
  if(err){
    console.log(apiKey);
    console.log('error:', err);
    
  } else {
    console.log(url);
    console.log('body:', body);
    
    let message = JSON.parse(body);
    let forecasts = message.forecasts;
    console.log('name:', forecasts);
    //.days[0].entries.min);
   // console.log('speed:', [0].speed);
    console.log(message);
    
    

  }
});
