require("dotenv").config();
let express = require("express");
let path = require("path");
let usersRouterApi = require("./routes/users");
let app = express();
// view engine setup

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/users", usersRouterApi);


console.log(`Servidor corriendo en el puerto http://localhost:${process.env.PORT}`)
module.exports = app;
