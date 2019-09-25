
//----VERIFICAR O ESTADO DA SESSÃO----//

var uid = null;

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		// User is signed in.
		uid = user.uid;
		var user = firebase.auth().currentUser;
		var email_id = user.email;
		document.getElementById("user_id").innerHTML = "Bem-Vindo: " + user.email;
		document.getElementById("user_id").style.color = "white";
		console.log(user);
	} else {
		uid = null;
		//window.location.replace("login.html");
		console.log(user);
	}
});


//----CONTROLAR O BANCO DE DADOS----//


var qtdPorc = null;
var qtdRacao = null;
var horario = null;
var servHorario = null;

function createData() {

	 qtdPorc = document.getElementById("qtdPorc").value;;
	 qtdRacao = document.getElementById("qtdRacao").value;
	 horario = document.getElementById("horario").value;
	 servHorario = document.getElementById("servHorario").value;
console.log(qtdPorc);
	firebase.database().ref('users/' + uid).set({
		qtdPorcao: qtdPorc,
		qtdRacao: qtdRacao,
		horario: horario,
		servHorario: servHorario
	}, function (error) {
		if (error) {
			// The write failed...
		} else {
			// Data saved successfully!
		}
	});
}

function readData() {
	firebase.database().ref('users/' + uid).on('value', (snap) => {
		console.log(snap.val());
	});
}


function updateData() {
	firebase.database().ref('users/' + uid).update({
		name: "Sasuke2",
		age: 17,
		email: "sasuke2@hotmail.com",
	}, function (error) {
		if (error) {
			// The write failed...
		} else {
			// Data saved successfully!
		}
	});
}

function deleteData() {
	firebase.database().ref('users/' + uid).remove();
}

//Com passagem de parametro
/*function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}*/