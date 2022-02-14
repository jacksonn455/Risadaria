PROVA TÉCNICA TRIIDER
===============================================

- Metodologia
Trello com a metodologia Scrum para gerenciamento do projeto.

- Back-End
API utilizando Nodejs + Express + Mongodb
Modelagem de banco de dados utilizando mongoose
Criptografia de campos sensíveis utilizando bcrypt
Autenticação de usuários utilizando jwt (jsonwebtoken)
Gerenciando variáveis ambiente utilizando .env

Para rodar a aplicação utilize o comando: nodemon -r dotenv/config .\app.js

- Rotas:

http://localhost:7001/user/register

body JSON: {
	"username":"jacksonmagnabosco@hotmail.com",
	"password":"teste123"
}

http://localhost:7001/user/login

passando no header a authorização JWT
ex: auth: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDk5ZjVhZDQ5MzQ5MjNmMDFiOTgxZCIsImlhdCI6MTY0NDc5ODkwNiwiZXhwIjoxNjQ1NDAzNzA2fQ._zRPhDL5_OlYFv4aZ-i_YTlbFCbCQDmcqW76rRL_dnM

body JSON: {
	"username":"jacksonmagnabosco@hotmail.com",
	"password":"teste123"
}

- Front-end
Bootstrap para deixar responsivo e padronizar os componentes assim seguindo as boas práticas do desenvolvimento HTML5 e CSS
Google fonts: biblioteca utilizada para modificar as fontes
Acessibilidade web: Técnicas que servem para ajudar usuários com deficiencia visual assim deixando o projeto mais inclusivo
Javascript: manipular os elementos de pagina e validar os campos