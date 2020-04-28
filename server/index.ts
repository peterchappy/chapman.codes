import path from "path";
import fs from "fs";

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import { StaticRouter, StaticRouterContext } from "react-router";

const favicon = require("express-favicon");

const port = process.env.PORT || 8080;
const app = express();

app.use(favicon("./build/favicon.ico"));
app.use(express.static("build"));

app.get("/*", (req, res) => {
  const context: StaticRouterContext = {};
  const app = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location: req.url, context },
      React.createElement(App)
    )
  );

  const indexFile = path.resolve("./build/index.html");

  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }
    const preRendered = data.replace(
      '<div id="root"></div>',
      `<div id="root">${app}</div>`
    );

    return res.send(preRendered);
  });
});

app.listen(port);
