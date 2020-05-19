"use strict";
const express = require("express");  
const fetch = require("node-fetch");
const app = express();
const PORT = process.env.PORT || 4000;
app.get("/spacex/launches", (req, res) => {  
  fetch("https://api.spacexdata.com/v3/launches/latest")
    .then(res => res.json())
    .then(json => { res.status(200).send(json) })
    .catch(error => {
      console.error(error);
      res.status(400).send(error);
    });
});
app.listen(PORT, () => console.log(`Server up and running on ${PORT}`));