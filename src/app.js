require("dotenv").config();
let express = require("express");
let path = require("path");
const logger = require("morgan");
let usersRouterApi = require("./routes/users");
let app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.listen(process.env.PORT, () =>{
    console.log(
      `Servidor corriendo en el puerto http://localhost:${process.env.PORT}`);

})
app.use("/users", usersRouterApi);
module.exports = app;
