

//----VERIFICAR O ESTADO DA SESSÃO----

firebase.auth().onAuthStateChanged(function(user) {
  
  if (user) {

    // User is signed in.
    document.getElementById("bg-login").style.display = "none";
    document.getElementById("bg-login2").style.display = "block";

    var user = firebase.auth().currentUser;

	if(user != null){
		var email_id = user.email;
		document.getElementById("user_id").innerHTML = "Bem-Vindo: " + user.email;
	}
  }
  else{
	document.getElementById("bg-login").style.display = "block";
	document.getElementById("bg-login2").style.display = "none";
  }
});

//----LOGIN----

//Email e Senha
function login(){

	var userEmail = document.getElementById("email_field").value;
	var userPassword = document.getElementById("password_field").value;

	firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;

	  window.alert("Error: " + errorMessage);
	  // ...
	});
}

//----LOGOUT----

function logout(){

	firebase.auth().signOut().then(function() {
	  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.
	});

}