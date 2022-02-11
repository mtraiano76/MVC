const express = require ("express");

const app = express ();

const mainController = require("./src/controllers/mainController");



app.listen(3000);

app.get("/", mainController.renderHome); //el renderHome es el metodo desde mainController

//redirecciona a controlador /*en controllers creo un archivo que sea mainControllers

