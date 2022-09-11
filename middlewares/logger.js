//Para que los middlewares sean escalables los definimos en una carpeta.

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const year = new Date().getFullYear();
  console.log(`[${method}] => ${url}`, year);
  next();
};

module.exports = logger;

/*Que tipos de Middlewares hay?
4 tipos "basicamente":
 1- Middlewares a nivel de aplicación, son los que definimos en index
 2- Middlewares a nivel de router
 3- Middlewares a nivel de routes (rutas) / Esta se coloca en la función después de la ruta router.get('/', loggerMiddleware, (req,res) => {})

*/
