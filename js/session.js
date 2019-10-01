
//----VERIFICAR O ESTADO DA SESSÃO----//

var uid = null;
var btn_salvar = null;

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

//Cria um novo agendamento no banco
function agendar() {

	//Variaveis 
	var var_qtdPorc = null;
	var var_horario = null;
	var var_servHorario = null;
	var var_qtdRacao = null;

	//Atribuindo valores as variaves e convertendo para inteiro e string
	var_qtdPorc = parseInt(document.getElementById("qtdPorc").value);
	var_qtdRacao = parseInt(document.getElementById("qtdRacao").value);
	var_horario = document.getElementById("horario").value.toString();
	var_servHorario = document.getElementById("servHorario").value.toString();

	//Mostrar no Log 
	console.log(var_qtdPorc);
	console.log(var_qtdRacao);
	console.log(var_horario);
	console.log(var_servHorario);

	//Colocando os dados das variveis no banco
	firebase.database().ref('users/' + uid).set({
		qtdPorcao: var_qtdPorc,
		qtdRacao: var_qtdRacao,
		horario: var_horario,
		servHorario: var_servHorario,
	}, function (error) {
		if (error) {
			// The write failed...
		} else {
			// Data saved successfully!
		}
	});
}

//Função para ver os agendamentos existentes
function verAgendamento() {

	firebase.database().ref('users/' + uid).on('value', (snap) => {

		//Declarando as variaveis e puxando os dados do banco
		var var_qtdPorc2 = snap.child("qtdPorcao").val();
		var var_qtdRacao2 = snap.child("qtdRacao").val();
		var var_horario2 = snap.child("horario").val();
		var var_servHorario2 = snap.child("servHorario").val();

		//Mostrar no Log 
		console.log(snap.val());
		console.log(var_qtdPorc2);
		console.log(var_qtdRacao2);
		console.log(var_horario2);
		console.log(var_servHorario2);

		//Trocando os valores dos campos input no HTML
		document.getElementById("quantidadeP").value = var_qtdPorc2;
		document.getElementById("horarioP").value = var_horario2;
		document.getElementById("horarioS").value = var_servHorario2;
		document.getElementById("quantidadeR").value = var_qtdRacao2;
	});
}

//Primeira vez que clicar no botão editar dentro do Modal
function editar() {

	//Liberar os campos para digitar
	document.getElementById("quantidadeP").disabled = false;
	document.getElementById("horarioP").disabled = false;
	document.getElementById("horarioS").disabled = false;
	document.getElementById("quantidadeR").disabled = false;

	//Botão salvar está ativado
	btn_salvar = true;

	//Se o botão salvar estivar ativado
	if (btn_salvar == true) {

		//Troca o texto para Salvar e o onclick para a função atualizar
		document.getElementById("btn_editar").innerText = "Salvar";
		document.getElementById("btn_editar").setAttribute('onclick', 'atualizar()');

	} else {

		console.log("error 404, btn_salvar não funciona");
		return;

	}

}

//Depois que clicar no botão editar ele vira o salvar e ganha a função atualizar
function atualizar() {

	//Declarando e atribuindo valores as variaves e convertendo para inteiro e string
	var var_qtdPorc3 = parseInt(document.getElementById("quantidadeP").value);
	var var_qtdRacao3 = parseInt(document.getElementById("quantidadeR").value);
	var var_horario3 = document.getElementById("horarioP").value.toString();
	var var_servHorario3 = document.getElementById("horarioS").value.toString();

	//Função update do Firebase
	firebase.database().ref('users/' + uid).update({
		qtdPorcao: var_qtdPorc3,
		qtdRacao: var_qtdRacao3,
		horario: var_horario3,
		servHorario: var_servHorario3,
	}, function (error) {
		if (error) {
			// The write failed...
		} else {
			// Data saved successfully!
		}
	});

	//Depois do update conferimos se o botão ainda é o salvar 
	if (btn_salvar == true) {

		//Se for voltamos ele pro editar 
		btn_salvar = false;
		document.getElementById("btn_editar").innerText = "Editar";
		document.getElementById("btn_editar").setAttribute('onclick', 'editar()');

		//Desabilitamos os campos novamente
		document.getElementById("quantidadeP").disabled = true;
		document.getElementById("horarioP").disabled = true;
		document.getElementById("horarioS").disabled = true;
		document.getElementById("quantidadeR").disabled = true;

	} else {

		console.log("error 404, btn_salvar não funciona");
		return;

	}
}

//Deleta o agendamento
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