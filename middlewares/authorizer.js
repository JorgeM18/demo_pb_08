const { users } = require("../data/data");

const authorizer = (req, res, next) => {
  //Obtenemos un ID por el query: los que se colocan con el signo de pregunta ? en la URL => localhost/users?
  const { id } = req.query;
  //Utilizamos el metodo find
  const user = users.find((el) => el.id === +id);
  //Le pasamos condicionales.
  //Significa que sí el usuario existe, has lo siguiente {}
  if (user) {
    req.user = user;
    //res.json(user); //Para mostrar solo el ID encontrado
    next();
  } else {
    res.status(401).send("<h1>El usuario no existe!</h1>");
  }
};

module.exports = authorizer;
