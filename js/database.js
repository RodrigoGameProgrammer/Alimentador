
//Variavel global uid para indentificar o usuário e poder usar em todas as funções
var uid = null;

// var btn_salvar = null;

//Variaveis globais 
var verif_qtdPorcao = null;
var verif_qtdRacao = null;

var verif_horario1 = null;
var verif_horario2= null;
var verif_horario3 = null;


//Variaveis que guardam elementos do HTML (modal agendamento)
var input_qtdPorc = document.getElementById("qtdPorcao");
var input_qtdRacao = document.getElementById("qtdRacao");

var input_horario1 = document.getElementById("horario1");
var input_horario2 = document.getElementById("horario2");
var input_horario3 = document.getElementById("horario3");

var label_horario1 = document.getElementById("label1");
var label_horario2 = document.getElementById("label2");
var label_horario3 = document.getElementById("label3");

var input_radio_filhote = document.getElementById("inputFilhote");
var input_radio_adulto = document.getElementById("inputAdulto");

var divAlertAgendar = document.getElementById("alertAgendar");
var divAlertAgendar2 = document.getElementById("alertAgendar2");

/* ---------------------------------------*/
/* ---->>> VERIFICA USUÁRIO LOGADO <<<----*/
/* ---------------------------------------*/

firebase.auth().onAuthStateChanged(function (user) {
	if (user) {
		// Usuário Logado
		uid = user.uid;
		var user = firebase.auth().currentUser;
		var email_id = user.email;
		document.getElementById("user_id").innerHTML = "Bem-Vindo: " + email_id;
		document.getElementById("user_id").style.color = "white";

		verificarUsuario()

		console.log(user);
	} else {
	//window.location.replace("login.html");
		console.log(user);
	}
});


/* -----------------------------------------------*/
/* ---->>> VERIFICA USUÁRIO NOVO/EXISTENTE <<<----*/
/* -----------------------------------------------*/

function verificarUsuario() {
	// Verificar se o usuário é novo ou existente
	firebase.database().ref('users/' + uid).on('value', (snap) => {

		//Puxando os dados do banco
		verif_horario = snap.child("horario").val();
		verif_horario2 = snap.child("horario2").val();
		verif_horario3 = snap.child("horario3").val();

		//Se os campos no banco forem vazios(null) significa que o usuário é novo, chamando o modal do primeiro agendamento
		if (verif_horario1 == null && verif_horario2 == null && verif_horario3 == null) {
			console.log("usuario novo");
			$("#mdlAgendamento").modal();
		} else {
			console.log("usuario existente");
		}
	});
}

/* -----------------------------------------------*/
/* --------->>> VALIDAR INPUT CHECKED <<<---------*/
/* -----------------------------------------------*/

//Verifica se um dos perfis está selecionado, se não estiver exibe uma mensagem e sinaliza os campos
function checarPerfil() {
	if (input_radio_filhote.checked == true) {

		input_qtdPorc.value = "3";
		input_qtdRacao.value = "150";
		
		input_horario3.style.display = "block";
		label_horario3.style.display = "block";

		input_qtdPorc.style.border = "none";
		input_qtdRacao.style.border = "none";

		//Tira as bordas causo o erro de horário igual esteja ativado quando for trocar de perfil
		input_horario1.style.border = "none";
		input_horario2.style.border = "none";
		input_horario3.style.border = "none";

		divAlertAgendar.style.display = "none";
		divAlertAgendar2.style.display = "none";
	
	} else if (input_radio_adulto.checked == true) {

		input_qtdPorc.value = "2";
		input_qtdRacao.value = "100";

		input_horario3.style.display = "none";
		label_horario3.style.display = "none";

		input_qtdPorc.style.border = "none";
		input_qtdRacao.style.border = "none";

		//Tira as bordas causo o erro de horário igual esteja ativado quando for trocar de perfil
		input_horario1.style.border = "none";
		input_horario2.style.border = "none";
		input_horario3.style.border = "none";

		divAlertAgendar.style.display = "none";
		divAlertAgendar2.style.display = "none";

	} else {

		input_qtdPorc.value = null;
		input_qtdRacao.value = null;

		input_horario3.style.display = "none";
		label_horario3.style.display = "none";

		input_qtdPorc.style.border = "2px solid #FF1000";
		input_qtdRacao.style.border = "2px solid #FF1000";

		divAlertAgendar.style.display = "block";

	}
}

/* -----------------------------------*/
/* ----->>> VALIDAR HORÁRIO <<<-----*/
/* -----------------------------------*/

function validarHorario() {

	if (input_radio_filhote.checked == true && (input_horario1.value == input_horario2.value || input_horario1.value == input_horario3.value || input_horario2.value == input_horario3.value)) {
		
		input_horario1.style.border = "2px solid #FF1000";
		input_horario2.style.border = "2px solid #FF1000";
		input_horario3.style.border = "2px solid #FF1000";

		divAlertAgendar2.style.display = "block";

inputFocus();

	
	} else if (input_radio_adulto.checked == true && input_horario1.value == input_horario2.value) {

		input_horario1.style.border = "2px solid #FF1000";
		input_horario2.style.border = "2px solid #FF1000";
	
		divAlertAgendar2.style.display = "block";

		inputFocus();

	} else {

		agendar();

	}
}

/* -----------------------------*/
/* ----->>> INPUT FOCUS <<<-----*/
/* -----------------------------*/

function inputFocus(){

		//Arrumando o focus e blur dos botões após o alert de horários iguais

		//Horário 1
		input_horario1.addEventListener('focus', function(){

			input_horario1.style.border = "2px solid #BF77FE";
			input_horario2.style.border = "none";
			input_horario3.style.border = "none";

			divAlertAgendar2.style.display = "none";


		},true);

		input_horario1.addEventListener('blur', function(){

			input_horario1.style.border = "none";

		},true);

		//Horário 2

		input_horario2.addEventListener('focus', function(){

			input_horario1.style.border = "none";
			input_horario2.style.border = "2px solid #BF77FE";
			input_horario3.style.border = "none";

			divAlertAgendar2.style.display = "none";

		},true);

		input_horario2.addEventListener('blur', function(){

			input_horario2.style.border = "none";

		},true);

		//Horário 3
		input_horario3.addEventListener('focus', function(){

			input_horario1.style.border = "none";
			input_horario2.style.border = "none";
			input_horario3.style.border = "2px solid #BF77FE";

divAlertAgendar2.style.display = "none";

		},true);

		input_horario3.addEventListener('blur', function(){

			input_horario3.style.border = "none";

		},true);
}


/* ----------------------------------*/
/* ->>> CONTROLAR BANCO DE DADOS <<<-*/
/* ----------------------------------*/

/* -----------------------------------*/
/* ----->>> CRIAR AGENDAMENTO <<<-----*/
/* -----------------------------------*/

function agendar() {

	//Convertendo os dados do input para int e texto
	verif_qtdPorcao = parseInt(input_qtdPorc.value);
	verif_qtdRacao = parseInt(input_qtdRacao.value);
	verif_horario1 = input_horario1.value.toString();
	verif_horario2 = input_horario2.value.toString();
	verif_horario3 = input_horario3.value.toString();

	//Colocando os dados das variveis no banco
	firebase.database().ref('users/' + uid).set({
		qtdPorcao: verif_qtdPorcao,
		qtdRacao: verif_qtdRacao,
		horario1: verif_horario1,
		horario2: verif_horario2,
		horario3: verif_horario3,
	}, function (error) {
		if (error) {
			// The write failed...
			alert("campos vazios");
		} else {
			$('#mdlAgendamento').modal('toggle');
			// Data saved successfully!
		}
	});
}

/* -------------------------*/
/* ->>> VER AGENDAMENTO <<<-*/
/* -------------------------*/

function verAgendamento() {

	firebase.database().ref('users/' + uid).on('value', (snap) => {

		//Puxando os dados do banco
		verif_qtdPorcao = snap.child("qtdPorcao").val();
		verif_qtdRacao = snap.child("qtdRacao").val();
		verif_horario1 = snap.child("horario1").val();
		verif_horario2 = snap.child("horario2").val();
		verif_horario3 = snap.child("horario3").val();

		//Mostrar no Log 
		console.log(snap.val());
		console.log(verif_qtdPorcao);
		console.log(verif_qtdRacao);
		console.log(verif_horario1);
		console.log(verif_horario2);
		console.log(verif_horario2);

		//Trocando os valores dos campos input no HTML
		document.getElementById("verQtdPorcao").value = verif_qtdPorcao;
		document.getElementById("verHorario1").value = verif_horario1;
		document.getElementById("verHorario2").value = verif_horario2;
		document.getElementById("verHorario3").value = verif_horario3;
		document.getElementById("verQtdRacao").value = verif_qtdRacao;
	});
}


// /* --------------------------------*/
// /* ->>> ATUALIZAR AGENDAMENTO  <<<-*/
// /* --------------------------------*/

// //Primeira vez que clicar no botão editar dentro do Modal
// function editar() {

// 	//Liberar os campos para digitar
// 	document.getElementById("quantidadeP").disabled = false;
// 	document.getElementById("horarioP").disabled = false;
// 	document.getElementById("horarioS").disabled = false;
// 	document.getElementById("quantidadeR").disabled = false;

// 	//Botão salvar está ativado
// 	btn_salvar = true;

// 	//Se o botão salvar estivar ativado
// 	if (btn_salvar == true) {

// 		//Troca o texto para Salvar e o onclick para a função atualizar
// 		document.getElementById("btn_editar").innerText = "Salvar";
// 		document.getElementById("btn_editar").setAttribute('onclick', 'atualizar()');

// 	} else {
// 		console.log("error 404, btn_salvar não funciona");
// 		return;
// 	}

// }

// //Depois que clicar no botão editar ele vira o salvar e ganha a função atualizar
// function atualizar() {

// 	//Declarando e atribuindo valores as variaves e convertendo para inteiro e string
// 	verif_qtdPorcao = parseInt(document.getElementById("quantidadeP").value);
// 	verif_qtdRacao = parseInt(document.getElementById("quantidadeR").value);
// 	verif_horario = document.getElementById("horarioP").value.toString();
// 	verif_horario2= document.getElementById("horarioS").value.toString();

// 	//Função update do Firebase
// 	firebase.database().ref('users/' + uid).update({
// 		qtdPorcao: verif_qtdPorcao,
// 		qtdRacao: verif_qtdRacao,
// 		horario: verif_horario + ":" + "00",
// 		servHorario: verif_horario2+ ":" + "00",
// 	}, function (error) {
// 		if (error) {
// 			alert("Campos Vazios");
// 		} else {
// 			// Data saved successfully!
// 		}
// 	});

// 	//Depois do update conferimos se o botão ainda é o salvar 
// 	if (btn_salvar == true) {

// 		//Se for voltamos ele pro editar 
// 		btn_salvar = false;
// 		document.getElementById("btn_editar").innerText = "Editar";
// 		document.getElementById("btn_editar").setAttribute('onclick', 'editar()');

// 		//Desabilitamos os campos novamente
// 		document.getElementById("quantidadeP").disabled = true;
// 		document.getElementById("horarioP").disabled = true;
// 		document.getElementById("horarioS").disabled = true;
// 		document.getElementById("quantidadeR").disabled = true;

// 	} else {

// 		console.log("error 404, btn_salvar não funciona");
// 		return;

// 	}
// }

// /* -----------------------------*/
// /* ->>> DELETAR AGENDAMENTO <<<-*/
// /* -----------------------------*/

// function deletarAgendamento() {
// 	firebase.database().ref('users/' + uid).remove();
// 	$('#mdlVerAgendamento').modal('toggle');
// }

