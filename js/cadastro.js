
function cadastro() {

	//Pegando os elementos HTML e seus valores e guardando em variaveis
	var userEmailCadastro = document.getElementById("email_cadastro").value;
	var userPasswordCadastro = document.getElementById("senha_cadastro").value;
	var userPasswordConfirma = document.getElementById("confirmar_senha_cadastro").value;

	//Validação se qualquer um dos campos estiver vazio
	if (userEmailCadastro == "" || userPasswordCadastro == "" || userPasswordConfirma == "") {

		alert("Preencha todos os campos");

	//valida se as senhas são iguais
	} else if (userPasswordCadastro == userPasswordConfirma) {

		//valida se as senhas tem mais que 8 digitos
		if (userPasswordCadastro.length < 8 || userPasswordConfirma.length < 8) {

			alert("A senha tem que ter mais que 8 digitos");

		} else {
			firebase.auth().createUserWithEmailAndPassword(userEmailCadastro, userPasswordCadastro).then(function () {
				window.location.href = "index.html";

			}).catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// ...
			});
		}

	} else {

		alert("Senhas diferentes");

	}
}
