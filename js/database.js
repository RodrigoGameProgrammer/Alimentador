//Instanciando o Banco de Dados

var database = firebase.database();

function adicionaDado(){

	database.ref().child('users').set("Katarina");
}
var user = firebase.auth().currentUser;

function atualizaPerfil(){
	user.updateProfile({
		displayName: "Katarina",
		photoURL: "https://i.pinimg.com/736x/6d/ed/76/6ded76dadafc06698352a97057164a10.jpg"
	}).then(function() {
		alert("atualizado");
  // Update successful.
	}).catch(function(error) {
	  // An error happened.
	});
}


function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}