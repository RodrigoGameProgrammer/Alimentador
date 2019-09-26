
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

function agendar() {

	qtdPorc = parseInt(document.getElementById("qtdPorc").value);
	qtdRacao = parseInt(document.getElementById("qtdRacao").value);
	horario = document.getElementById("horario").value.toString();
	servHorario = document.getElementById("servHorario").value.toString();

	console.log(qtdPorc);
	console.log(qtdRacao);
	console.log(horario);
	console.log(servHorario);

	firebase.database().ref('users/' + uid).set({
		qtdPorcao: qtdPorc,
		qtdRacao: qtdRacao,
		horario: horario,
		servHorario: servHorario,
	}, function (error) {
		if (error) {
			// The write failed...
		} else {
			// Data saved successfully!
		}
	});
}

function verAgendamento() {
	firebase.database().ref('users/' + uid).on('value', (snap) => {
		var qtdPorc2 = snap.child("qtdPorcao").val();
		var qtdRacao2 = snap.child("qtdRacao").val();
		var horario2 = snap.child("horario").val();
		var servHorario2 = snap.child("servHorario").val();

		console.log(snap.val());
		console.log(qtdPorc2 );
		console.log(qtdRacao2);
		console.log(horario2);
		console.log(servHorario2);

		document.getElementById("selQuant2").innerHTML = qtdPorc2;
		document.getElementById("iptPortion2").innerHTML = qtdRacao2;
		document.getElementById("iptTime2").innerHTML = horario2;
		document.getElementById("iptInterval2").innerHTML = servHorario2;
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

function deletarAgendamento() {
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