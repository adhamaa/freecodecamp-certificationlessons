//using Switch case statements
//An alternative to if statements
//use when you have a long list of values to compare

let fetch = () => {
  let codes = [
    { code: 200, text: "Ok" },
    { code: 201, text: "Created" },
    { code: 304, text: "Not Modified" },
    { code: 400, text: "Bad Request" },
    { code: 401, text: "Unauthorized" },
    { code: 403, text: "Forbidden" },
    { code: 404, text: "File Not Found" },
    { code: 405, text: "Method Not Allowed" },
    { code: 500, text: "Internal Server Error" },
    { code: 503, text: "Service Unavailable" },
    { code: 600, text: "Not a real code" }
  ];
  let num = Math.floor(Math.random() * codes.length);
  return codes[num];
};

let response = fetch();
console.log(response);
switch (response.code) {
  case 200:
  case 201:
    console.log("All is good", response.text);
    break;
  case 304:
    console.log("Redirect", response.text);
    break;
  case 400:
  case 401:
  case 403:
  case 404:
  case 405:
    console.log("Problem", response.text);
    break;
  case 500:
  case 503:
    console.log("Server Error", response.text);
    break;
  default:
    console.log(response.code, response.text);
}
