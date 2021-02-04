const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZWFkc295IiwiYSI6ImNraG5qa2pidzAwY3kydHA1am43amVxNngifQ.z87OrkyGWKEc_mtz-xLPrA`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].geometry.coordinates[0],
        longitude: body.features[0].geometry.coordinates[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
