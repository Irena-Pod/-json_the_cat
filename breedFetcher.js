const request = require("request");
const lineArgument = process.argv[2].toString();
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

fetchBreedDescription(lineArgument, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});