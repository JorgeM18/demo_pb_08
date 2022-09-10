const express = require("express");
//importamos las rutas
const apiRoutes = require("./routers/app.routers");

//importamos el modulo path (modulo nativo de NodeJS), nos ayuda con las rutas q' debamos colocar
const path = require("path");

//instancia de express
const app = express();
//Puerto
const PORT = process.env.PORT || 8080;

/* 
Que es un middllewares? Una función.
(use) aplica para TODOS los metodos (get,put,post,delete)

Todos los metodos get, post, put, etc son considerados como Middllewares. Estos son discriminados de manera distinta porque:
Queremos que se ejecute antes de la definición de nuestras rutas (routes), lo que se busca con los middllewares
es que el cliente haga una peticion (Objeto REQ), luego definimos un middlleware (CAPA MEDIA espanol) para esa peticion 
y se atiende esa peticion con la respuesta del (Obj RES)

Desde el middlleware se le puede entregar y cortar la respuesta al usuario sin que el servidor busque nuestras rutas para esa respuesta.
*/
// Middlewares a nivel de aplicación
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* 
express.static(), con este metodo se puede servir todos los archivos staticos que querramos si le damos 1 ruta.

Si dentro de la ruta que le pasemos hay un archivo con el nombre: index.html no es necesario pasarlo como ruta home ( / )

Normalmente esta carpeta es nombrada como "public" dentro de proyectos.

Si necesitamos agregar otras paginas html solo se agregan a la carpeta public
*/
app.use(express.static("public"));

/* 
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./nav-app/index.html"));
});

app.get("/styles.css", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./nav-app/styles.css"));
});

app.get("/browser-app.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./nav-app/browser-app.js"));
});

app.get("/logo.svg", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./nav-app/logo.svg"));
}); */

// Routes
app.use("/api", apiRoutes);

//Ejecución del metodo Listen
const connectedServer = app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

//Manejo de errores que pueda provenir de la falla de conexión
connectedServer.on("error", (error) => {
  console.error("Error: ", error);
});

/* 
rutas de la pagina:
  Todos los productos:
  - http://localhost:8080/api/products

  Buscar producto por ID:
  - http://localhost:8080/api/products/1

  Filtrar productos por maxPrice
  -http://localhost:8080/api/products?maxPrice=300 (Todos los prodcutso que su valor no pasa de 300)
*/
