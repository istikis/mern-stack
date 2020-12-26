const express = require('express');
const cors = require('cors');
const app = express();

// SETTINGS: Configuración del Server (nombre de servidor, motor de plantillas, config puerto definido)
app.set('port', process.env.PORT || 4000);


//MIDDLEWARES: Permite definir algunas funciones para ejecutar antes de que lleguen a las rutas
app.use(cors());
app.use(express.json());

// ROUTES: Definimos las rutas que el frontend podrá visitar

app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));


//TODO: Variables globales - validaciones - etc

module.exports = app;