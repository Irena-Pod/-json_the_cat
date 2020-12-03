const request = require("request");
const lineArgument = process.argv[2].toString();
const url = "https://api.thecatapi.com/v1/breeds/search?q=" + lineArgument

request(url, (error, response, content) => {
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(content);
  if (data.length === 0) {
    console.log("Breed not found.")
  } else {
    console.log(data[0].description);
  }
});

