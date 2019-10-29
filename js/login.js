
//----LOGIN----//
var divAlertLogin = document.getElementById("alertLogin");
var userEmail = document.getElementById("email_field");
var userPassword = document.getElementById("password_field");
var btnCriarConta = document.getElementById("btnCriarConta");

//Email e Senha
function login() {

	firebase.auth().signInWithEmailAndPassword(userEmail.value, userPassword.value).then(function () {
		window.location.href = "index.html";

	}).catch(function (error) {
		// Handle Errors here.
		// var errorCode = error.code;
		// var errorMessage = error.message;
		// window.alert("Error: " + errorMessage);
		alertLogin();
		removeAlert();

	});
}

//----LOGOUT----//

function logout() {

	firebase.auth().signOut().then(function () {
		// Sign-out successful.
		window.location.href = "login.html";

	}).catch(function (error) {
		// An error happened.
	});

}


//----CONTROLAR ALERTAS----//

function alertLogin(){
	divAlertLogin.style.display="block";
}

function removeAlert(){

	userEmail.addEventListener('focus', (event) => {
		divAlertLogin.style.display="none";
	}, true);
	

	userPassword.addEventListener('focus', (event) => {
		divAlertLoginn.style.display="none";
	}, true);

	btnCriarConta.addEventListener('click', (event) => {
		divAlertLogin.style.display="none";
		$("#criarConta").modal();
	}, true);

}