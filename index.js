const { fetchBreedDescription } = require ("./breedFetcher");
const lineArgument = process.argv[2];

fetchBreedDescription(lineArgument, (error, description) => {
  if (error) {
    console.log(error);
  } else {
    console.log(description);
  }
});
