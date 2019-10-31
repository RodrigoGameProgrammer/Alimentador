
/* -------------------------*/
/* ------>>> LOGIN <<<------*/
/* -------------------------*/

//Colocando os elementos do HTML em variaveis 
var divAlertLogin = document.getElementById("alertLogin");
var userEmail = document.getElementById("email_field");
var userPassword = document.getElementById("password_field");
var btnCriarConta = document.getElementById("btnCriarConta");

//Email e Senha
function login() {

	firebase.auth().signInWithEmailAndPassword(userEmail.value, userPassword.value).then(function () {
		
		//Login feito com sucesso
		window.location.href = "index.html";

	}).catch(function (error) {
		
		//Qualquer Erro
		alertLogin();
		removeAlert();

	});
}

/* -------------------------*/
/* ----->>> LOGOUT <<<------*/
/* -------------------------*/

function logout() {

	firebase.auth().signOut().then(function () {
		// Sign-out successful.
		window.location.href = "login.html";

	}).catch(function (error) {
		// An error happened.
	});

}


/* ------------------------------------------*/
/* ------>>> ALERTA USUÁRIO E SENHA <<<------*/
/* ------------------------------------------*/

//Deixa a mensagem de usuário e senha incorretos visivel
function alertLogin(){
	divAlertLogin.style.display="block";
}

//Remove a mensagem ao clicar em um dos campos ou no botão de criar conta
function removeAlert(){

	userEmail.addEventListener('focus', (event) => {
		divAlertLogin.style.display="none";
	}, true);
	

	userPassword.addEventListener('focus', (event) => {
		divAlertLogin.style.display="none";
	}, true);

	//Chama o modal cadastrar via script devido ao conflito que ocorre ao adicionar a função no botão
	btnCriarConta.addEventListener('click', (event) => {
		divAlertLogin.style.display="none";
		$("#criarConta").modal();
	}, true);

}