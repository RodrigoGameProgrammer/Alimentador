
//----LOGIN----//

//Email e Senha
function login() {

	var userEmail = document.getElementById("email_field").value;
	var userPassword = document.getElementById("password_field").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).then(function () {
		window.location.href = "index.html";

	}).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;

		window.alert("Error: " + errorMessage);


		// ...
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