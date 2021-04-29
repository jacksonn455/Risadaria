//Criando o container do banco
//docker run --name mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=b4nc05qu4d4p mongo:latest

const mongoose = require("mongoose");
const DB_ADDR = process.env.DB_ADDR || "localhost";
const DB_USER = process.env.DB_USER || "root";
const DB_PASS = process.env.DB_PASS || "b4nc05qu4d4p";
const CON = `mongodb://${DB_USER}:${DB_PASS}@${DB_ADDR}:27017`;

//conexão com o banco
var connMongo = mongoose
  .connect(CON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Conexão com MongoDB realizada com sucesso");
  })
  .catch((erro) => {
    console.log(DB_ADDR);
    console.log("Erro: Conexão com MongoDB não foi realizada com sucesso");
    console.log(erro);
  });

module.exports = connMongo;
