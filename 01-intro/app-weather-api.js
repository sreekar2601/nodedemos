//http://api.weatherstack.com/current ? access_key = 8c93049c277099856a0dc746b1fe7c12 & query = New York

import request from "request";
//const req = require("req");

const url =
  "http://api.weatherstack.com/current?access_key=8c93049c277099856a0dc746b1fe7c12&query=Chennai";
request({ url: url, json: true }, (error, response) => {
  console.log("It is currently " + response.body.current.temperature + "'c");
});
