const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb://camila:<b455pl4yer>@cluster0-shard-00-00-wj1qa.mongodb.net:27017,cluster0-shard-00-01-wj1qa.mongodb.net:27017,cluster0-shard-00-02-wj1qa.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

app.post('/users/:id', (request, response) => {
  console.log(request.body);
  return response.json({ message: 'Hello OmniStack'});
});

app.listen(3333);
