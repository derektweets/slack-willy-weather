// Call Willy Weather API
let request = require('request');
const dayjs = require('dayjs');


let apiKey = process.env.WILLY_TOKEN || 'MWI0ZGVmNGU3NGRmYjk2MTQwZjVkNT';
let locationId = '4988'; //Bondi
let units = 'units=amount:mm,distance:km,speed:knots,swellHeight:ft,temperature:f,tideHeight:m,pressure:hpa';
let forecasts = 'forecasts=wind&days=1&startDate=' + dayjs().format('YYYY-MM-DD'); 
let url = 'https://api.willyweather.com.au/v2/'
	+ apiKey 
	+ '/locations/'+ locationId 
	+'/weather.json?'
	+ units 
	+ '&' + forecasts
	;

request(url, function (err, response, body) {
  if(err){
    console.log(apiKey);
    console.log('error:', err);
    
  } else {
    console.log(url);
    console.log('body:', body);
    
    let message = JSON.parse(body);
    console.log('name:', message.location.name);
   // console.log('speed:', [0].speed);
    console.log(message);
    
    
	for (const d of message.forecasts.wind.days) {
		console.log('d:' + d);
		    
		for (const e of d.entries) {
		    console.log(e);
			console.log(dayjs().format(e.dateTime));
			console.log(e.dateTime + ' = ' + e.speed + ' > ' + e.directionText);
		}
	}
  }
});
