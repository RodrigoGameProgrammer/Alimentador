
/* --------------------------------------*/
/* ->>> VERIFICAR O ESTADO DA SESSÃO <<<-*/
/* --------------------------------------*/

var uid = null;
var btn_salvar = null;

//Variaveis globais 
var verif_qtdPorc = null;
var verif_horario = null;
var verif_servHorario = null;
var verif_qtdRacao = null;

//Variaveis modal agendamento
var input_qtdPorc = document.getElementById("qtdPorc");
var input_qtdRacao = document.getElementById("qtdRacao");
var input_horario = document.getElementById("horario");
var input_servHorario = document.getElementById("servHorario");

var msgModalAgendamento = document.getElementById("msgModal");

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
		uid = null;
		//window.location.replace("login.html");
		console.log(user);
	}
});

function verificarUsuario() {
	// Verificar se o usuário é novo ou existente
	firebase.database().ref('users/' + uid).on('value', (snap) => {

		//Puxando os dados do banco
		verif_qtdPorc = snap.child("qtdPorcao").val();
		verif_qtdRacao = snap.child("qtdRacao").val();
		verif_horario = snap.child("horario").val();
		verif_servHorario = snap.child("servHorario").val();

		//Se os campos no banco forem vazios(null) significa que o usuário é novo, chamando o modal do primeiro agendamento
		if (verif_qtdPorc == null && verif_qtdRacao == null && verif_horario == null && verif_servHorario == null) {
			console.log("usuario novo");
			$("#mdlAgendamento").modal();
		} else {
			console.log("usuario existente");
		}
	});
}

function validarDados() {

	//Atribuindo valores as variaves e convertendo para inteiro e string
	verif_qtdPorc = parseInt(input_qtdPorc.value);
	verif_qtdRacao = parseInt(input_qtdRacao.value);
	verif_horario = input_horario.value.toString();
	verif_servHorario = input_servHorario.value.toString();

	if (isNaN(verif_qtdPorc) || isNaN(verif_qtdRacao) || verif_horario == "" || verif_servHorario == "") {
		alert("Preencher campo");
		if (isNaN(verif_qtdPorc)) {

			//Deixa a borda vermelha
			input_qtdPorc.style.border = "2px solid #FF1000";

			//Quando focado deixa a borda cor padrão focus
			input_qtdPorc.addEventListener('focus', (event) => {
				event.target.style.border = "2px solid #BF77FE";
			}, true);

			//Desfocado tira a borda padrão e deixa normal
			input_qtdPorc.addEventListener('blur', (event) => {
				event.target.style.border = 'none';
			}, true);

		} else if (verif_horario == "") {

			//Deixa a borda vermelha
			input_horario.style.border = "2px solid #FF1000";

			//Quando focado deixa a borda cor padrão focus
			input_horario.addEventListener('focus', (event) => {
				event.target.style.border = "2px solid #BF77FE";
			}, true);

			//Desfocado tira a borda padrão e deixa normal
			input_horario.addEventListener('blur', (event) => {
				event.target.style.border = 'none';
			}, true);

		} else if (verif_servHorario == "") {

			//Deixa a borda vermelha
			input_servHorario.style.border = "2px solid #FF1000";

			//Quando focado deixa a borda cor padrão focus
			input_servHorario.addEventListener('focus', (event) => {
				event.target.style.border = "2px solid #BF77FE";
			}, true);

			//Desfocado tira a borda padrão e deixa normal
			input_servHorario.addEventListener('blur', (event) => {
				event.target.style.border = 'none';
			}, true);

		} else if (isNaN(verif_qtdRacao)) {

			//Deixa a borda vermelha
			input_qtdRacao.style.border = "2px solid #FF1000";

			//Quando focado deixa a borda cor padrão focus
			input_qtdRacao.addEventListener('focus', (event) => {
				event.target.style.border = "2px solid #BF77FE";
			}, true);

			//Desfocado tira a borda padrão e deixa normal
			input_qtdRacao.addEventListener('blur', (event) => {
				event.target.style.border = 'none';
			}, true);

		}
	} else {
		agendar();
	}
}
/* ----------------------------------*/
/* ->>> CONTROLAR BANCO DE DADOS <<<-*/
/* ----------------------------------*/

/* ----------------------------------*/
/* ->>> CRIAR AGENDAMENTO<<<-*/
/* ----------------------------------*/

function agendar() {

	console.log(verif_qtdPorc);
	console.log(verif_qtdRacao);
	console.log(verif_horario);
	console.log(verif_servHorario);

	//Colocando os dados das variveis no banco
	firebase.database().ref('users/' + uid).set({
		qtdPorcao: verif_qtdPorc,
		qtdRacao: verif_qtdRacao,
		horario: verif_horario + ":" + "00",
		servHorario: verif_servHorario + ":" + "00",
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
		verif_qtdPorc = snap.child("qtdPorcao").val();
		verif_qtdRacao = snap.child("qtdRacao").val();
		verif_horario = snap.child("horario").val();
		verif_servHorario = snap.child("servHorario").val();

		//Mostrar no Log 
		console.log(snap.val());
		console.log(verif_qtdPorc);
		console.log(verif_qtdRacao);
		console.log(verif_horario);
		console.log(verif_servHorario);

		//Trocando os valores dos campos input no HTML
		document.getElementById("quantidadeP").value = verif_qtdPorc;
		document.getElementById("horarioP").value = verif_horario;
		document.getElementById("horarioS").value = verif_servHorario;
		document.getElementById("quantidadeR").value = verif_qtdRacao;
	});
}


/* --------------------------------*/
/* ->>> ATUALIZAR AGENDAMENTO  <<<-*/
/* --------------------------------*/

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
	verif_qtdPorc = parseInt(document.getElementById("quantidadeP").value);
	verif_qtdRacao = parseInt(document.getElementById("quantidadeR").value);
	verif_horario = document.getElementById("horarioP").value.toString();
	verif_servHorario = document.getElementById("horarioS").value.toString();

	//Função update do Firebase
	firebase.database().ref('users/' + uid).update({
		qtdPorcao: verif_qtdPorc,
		qtdRacao: verif_qtdRacao,
		horario: verif_horario + ":" + "00",
		servHorario: verif_servHorario + ":" + "00",
	}, function (error) {
		if (error) {
			alert("Campos Vazios");
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

/* -----------------------------*/
/* ->>> DELETAR AGENDAMENTO <<<-*/
/* -----------------------------*/

function deletarAgendamento() {
	firebase.database().ref('users/' + uid).remove();
	$('#mdlVerAgendamento').modal('toggle');
	msgModalAgendamento.innerHTML = "<center>Agendar</center>";
}

