//Instanciando o Banco de Dados

var database = firebase.database();


var userNome = document.getElementById("nome").value;
var userIdade = document.getElementById("idade").value;


function adicionaDado(){

	database.ref().child('users').set("Katarina");
}

