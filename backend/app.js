const express = require('express');
const cors = require('cors');
const db = require('./db/dbConnect');
const routeTransactioons = require("./routes/transactions")
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(cors());

//database connection
db();

//routes
app.use("/api/v1", routeTransactioons);


app.listen(PORT, ()=> {
    console.log(`Server is listening at http://localhost:${PORT}`)
});
