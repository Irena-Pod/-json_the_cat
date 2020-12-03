const request = require("request");
const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function (breedName, callback) {
  request(url + breedName, (error, response, content) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(content);
      if (data.length === 0) {
        callback(null, "Breed not Found.");
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };