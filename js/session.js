//----VERIFICAR O ESTADO DA SESSÃO----

firebase.auth().onAuthStateChanged(function(user) {
  
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
	var email_id = user.email;
	document.getElementById("user_id").innerHTML = "Bem-Vindo: " + user.email;
	document.getElementById("user_id").style.color = "white";
	console.log(user);
	

  }
  else{
	alert("sem usuario");
		console.log(user);
  }
});
