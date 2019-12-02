
/* -------------------------*/
/* ------>>> LOGIN <<<------*/
/* -------------------------*/

//Colocando os elementos do HTML em variaveis 
var divAlertLogin = document.getElementById("alertLogin");
var userEmail = document.getElementById("email_field");
var userPassword = document.getElementById("password_field");
var btnCriarConta = document.getElementById("btnCriarConta");

//Apertar Enter ativa o botão
userPassword.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		document.getElementById("btnLogin").click();
	}
});

//Email e Senha
function login() {
	firebase.auth().signInWithEmailAndPassword(userEmail.value, userPassword.value).then(function () {

		//Login feito com sucesso
		window.location.href = "admin.html";

	}).catch(function (error) {

		//Qualquer Erro
		alertLogin();
		removeAlert();

	});
}

/* ------------------------------------------*/
/* ------>>> ALERTA USUÁRIO E SENHA <<<------*/
/* ------------------------------------------*/

//Deixa a mensagem de usuário e senha incorretos visivel
function alertLogin() {
	divAlertLogin.style.display = "block";
}


//Remove a mensagem ao clicar em um dos campos ou no botão de criar conta
btnCriarConta.addEventListener('click', (event) => {
	divAlertLogin.style.display = "none";
	$("#criarConta").modal();
}, true);

function removeAlert() {

	userEmail.addEventListener('focus', (event) => {
		divAlertLogin.style.display = "none";
	}, true);


	userPassword.addEventListener('focus', (event) => {
		divAlertLogin.style.display = "none";
	}, true);

	//Chama o modal cadastrar via script devido ao conflito que ocorre ao adicionar a função no botão

}