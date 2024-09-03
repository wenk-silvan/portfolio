const express = require("express")
const fs = require("fs")
const yaml = require("js-yaml")

const app = express()
const port = 3000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get("/api/v1/", (req, res) => {
    try {
        const data = fs.readFileSync("./assets/db.yaml", "utf8")
        const parsed = yaml.load(data)
        res.send(parsed)
    } catch (e) {
        console.log("Error while loading data: ", e)
    }
})

app.listen(port, () => {
    console.log("App listening on port ", port)
})