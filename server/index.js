const keys = require("./keys")

const express = require("express")
// const bodyParsor = require("body-parser")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const { Pool } = require("pg")
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
})

pgClient.on("error", () => console.log("Lost Postgres Connection"))

pgClient
  .query("CREATE TABLE IF NOT EXISTS values (number INT)")
  .catch((error) => console.log(error))
