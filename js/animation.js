//Pegando a ul do HTML que vai ser animada
const bg_animation = document.querySelector("ul.bg-animation");

for (let i = 0; i < 8; i++) {

   //Criando a li(lista) para inserir as animações
   const bg_li = document.createElement("li");

   //Variavel para deixar a posição, o delay e a duração aleatorio
   const random = (min, max) => Math.random() * (max - min) + min;

   const position = random(1, 99);
   const delay = random(5, 0.1);
   const duration = random(5, 10);

   //Mudando o estado da animação
   bg_li.style.animationFillMode = "backwards";

   //Colocando as variaveis random nos atributos
   bg_li.style.left = `${position}%`;
   bg_li.style.animationDelay = `${delay}s`;
   bg_li.style.animationDuration = `${duration}s`

   //Pegando os filhos da ul e colocando atributos diferentes em cada uma
   bg_animation.appendChild(bg_li);
}

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");

function hoverImg1() {
   img1.src = "./img/icons/dog-icon4.png";
}

function hoverOutImg1() {
   img1.src = "./img/icons/dog-icon3.png";
}

function hoverImg2() {
   img2.src = "./img/icons/logs-icon3.png";
}

function hoverOutImg2() {
   img2.src = "./img/icons/logs-icon2.png";
}

function hoverImg3() {
   img3.src = "./img/icons/gallery-icon4.png";
}

function hoverOutImg3() {
   img3.src = "./img/icons/gallery-icon3.png";
}

function hoverImg4() {
   img4.src = "./img/icons/icon_78px/icon-back-orange.png";
}

function hoverOutImg4() {
   img4.src = "./img/icons/icon_78px/icon-back-72.png";
}

function trocaIcon() {
   setTimeout(function () {
      img5.src = "./img/icons/logo-icon-white-natal3.png"
   }, 1000);
}

function trocaIcon2() {

   setTimeout(function () {
      img5.src = "./img/icons/logo-icon-white.png"
   }, 1000);

}

