const request = require("request");


const forecast = (lat, lon, callback) => {
  const url =
    `http://api.weatherstack.com/current?access_key=ad4e1b26feb691e352856ef929645592&query=${lon},${lat}`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. Humidity: ${body.current.humidity}% Visibility: ${body.current.visibility}`
      );
    }
  });
};

module.exports = forecast;
