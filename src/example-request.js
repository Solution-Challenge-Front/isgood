const exampleRequest = require("./example-request");

exampleRequest()
  .then((response) => {
    console.log(response.body);
  })
  .catch((error) => {
    console.error(error);
  });
