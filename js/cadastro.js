
function cadastro() {

	var userEmailCadastro = document.getElementById("email_cadastro").value;
	var userPasswordCadastro = document.getElementById("senha_cadastro").value;
	var userPasswordConfirma = document.getElementById("confirmar_senha_cadastro").value;

	if (userEmailCadastro == "" || userPasswordCadastro == "" || userPasswordConfirma == "") {

		alert("Preencha todos os campos");

	} else if (userPasswordCadastro == userPasswordConfirma) {

		firebase.auth().createUserWithEmailAndPassword(userEmailCadastro, userPasswordCadastro).then(function () {
			window.location.href = "index.html";

		}).catch(function (error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
		});

	} else if (userPasswordCadastro.length < 8 || userPasswordConfirma.length < 8) {
		
		alert("A senha tem que ter mais que 8 digitos");

	} else {

		alert("Senhas diferentes");

	}
}
