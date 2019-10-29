
//----LOGIN----//

//Email e Senha
function login() {

	var userEmail = document.getElementById("email_field").value;
	var userPassword = document.getElementById("password_field").value;
	
	firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(function () {
		window.location.href = "index.html";

	}).catch(function (error) {
		// Handle Errors here.
		// var errorCode = error.code;
		// var errorMessage = error.message;
		// window.alert("Error: " + errorMessage);
		alert();
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

function alert(){
	document.getElementById("alertLogin").style.display="block";

}

function removeAlert(){

	email_field.addEventListener('focus', (event) => {
		document.getElementById("alertLogin").style.display="none";
	}, true);
	

	password_field.addEventListener('focus', (event) => {
		document.getElementById("alertLogin").style.display="none";
	}, true);

	btnCriarConta.addEventListener('focus', (event) => {
		document.getElementById("alertLogin").style.display="none";
		$("#criarConta").modal();
	}, true);

}