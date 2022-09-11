//Archivo principal, el cual va estar referenciando otros archivos.

const express = require("express");
//const authorizer = require("../middlewares/authorizer");
const logger = require("../middlewares/logger");

//importamos las rutas que exportamos en cada mini app.
const productsRoutes = require("./products/products.routes");
const usersRoutes = require("./users/users.routes");

const router = express.Router();

//integramos la rutas con nuestro router principal. Con un Middlewares
//podemos pasar un parametro adicional (string) al de la ruta con el prefijo general para esas rutas.
//Donde se definen los Middlewares se puede separar por comas " , " o por arreglos []. (recomendado es por arreglo)
//Importante es el orden porque se evalua respecto a cual este primero.
const middlewares = [logger];
router.use(middlewares);
router.use("/products", productsRoutes);
router.use("/users", usersRoutes);

//referenciamos e integramos a una aplicación de nivel superior. (alcance global)

module.exports = router;
