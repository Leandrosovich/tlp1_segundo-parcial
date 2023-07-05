// Imports
const cors = require("cors");
const express = require("express");
const app = express();

const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");

require("ejs");
require("dotenv").config();

const port = process.env.PORT || 4000;

// Middlewares

app.set("view engine", "ejs");

// TODO: Implementar middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(require("./routes/reserva.routes.js"));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(port, () => console.log("Server on http://localhost:4000"));
