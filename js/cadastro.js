
function cadastro(){

	var userEmailCadastro = document.getElementById("email_cadastro").value;
	var userPasswordCadastro = document.getElementById("senha_cadastro").value;
	var userPasswordConfirma = document.getElementById("confirmar_senha_cadastro").value;

	if(userPasswordCadastro == userPasswordConfirma){

		firebase.auth().createUserWithEmailAndPassword(userEmailCadastro, userPasswordCadastro).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});
		
	}else{
		alert("Senha Diferente");
	}
}