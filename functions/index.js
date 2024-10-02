const express = require("express")
const fs = require("fs")
const yaml = require("js-yaml")
const functions = require("firebase-functions")
const cors = require("cors")

const app = express()

const corsOptions = {
    origin: ["https://wenk-portfolio.web.app", "https://silvan-wenk.com"],
    methods: ["GET", "POST", "OPTIONS"], 
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    credentials: true
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.get("/v1", (req, res) => {
    try {
        const data = fs.readFileSync("./db.yaml", "utf8")
        const parsed = yaml.load(data)
        res.status(200).json(parsed)
    } catch (e) {
        console.log("Error while loading data: ", e)
        res.status(500).send("Error loading data");
    }
})

exports.api = functions.https.onRequest(app);
