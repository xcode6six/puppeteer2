const express = require("express");
const ServerlessHttp = require("serverless-http");
const { scrapeLogic } = require("./scrapeLogic");

const app = express();


app.get('/.netlify/functions/api', (req, res) => {
   scrapeLogic(res);
})


const handler = ServerlessHttp(app);

module.exports.handler = async(event, context) => {
    const result = await handler(event, context);
    return result;
}