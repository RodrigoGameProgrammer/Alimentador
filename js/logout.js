/* -------------------------*/
/* ----->>> LOGOUT <<<------*/
/* -------------------------*/

function logout() {

	firebase.auth().signOut().then(function () {
		// Sign-out successful.
		window.location.href = "login.html";

	}).catch(function (error) {
		// An error happened.
	});

}
