//----VERIFICAR O ESTADO DA SESSÃO----

firebase.auth().onAuthStateChanged(function(user) {
  
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
	var email_id = user.email;
	document.getElementById("user_id").innerHTML = "Bem-Vindo: " + user.email;
	document.getElementById("email_field").innerHTML = "";
	document.getElementById("password_field").innerHTML = "";
  }
  else{
	alert("sem usuario");
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
	  document.getElementById("user_id").innerHTML = "Sem usuário conectado";
	}).catch(function(error) {
	  // An error happened.
	});

}