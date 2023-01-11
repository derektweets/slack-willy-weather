// Call Willy Weather API
let request = require('request');
const dayjs = require('dayjs');


let apiKey = process.env.WILLY_TOKEN || 'MWI0ZGVmNGU3NGRmYjk2MTQwZjVkNT';
let locationId = '6810'; //Sunshine Coast

/*
let url = 'https://api.willyweather.com.au/v2/'
	+ apiKey 
	+ '/search.json?query=4575&limit=1'
	;

request(url, function (err, response, body) {
    if(err){
      console.log(apiKey);
      console.log('error:', err);
      
    } else {
      console.log(url);
      //console.log('body:', body);
    
      let message = JSON.parse(body);
      locationId = message[0].id;
      console.log(locationId + message[0].name);
      console.log(message);
    }
  }
);*/


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
    //console.log('body:', body);
    
    let message = JSON.parse(body);
    let d1 = message[0].forecasts.weather.days[0];
    let d = d1.entries[0];
    
    //console.log('Day:',message[0].forecasts.weather.days[0].entries.dateTime);
    console.log('Day:',d1.dateTime);
    console.log('precisCode:',d.precisCode);
    console.log('precis:',d.precis);
    console.log('precisOverlayCode:',d.precisOverlayCode);
    console.log('night:',d.night);
    console.log('min:',d.min);
    console.log('max:',d.max);

    console.log(message);

    }
  }
);
