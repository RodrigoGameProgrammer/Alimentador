
//Pegando o element ul com a classe CSS de animação
const dog_paw_left = document.querySelector("ul.bg-animation");
const dog_paw_right = document.querySelector("ul.bg-animation2");


//Criando as listas
var li = [document.createElement("li"), document.createElement("li")];

drawImg();

function drawImg() {

    //Posição dog-paw da direita
    li[1].style.left = "80px";
    li[1].style.top = "-8px";

    //Inserindo as li dentro da ul
    dog_paw_left.appendChild(li[0]);
    dog_paw_right.appendChild(li[1]);
}