//Pegando o element ul com animação
const bg_animation = document.querySelector("ul.bg-animation");
const bg_animation2 = document.querySelector("ul.bg-animation2");

//Criando as listas de "imagens"
var bg_li =
    [document.createElement("li"), document.createElement("li"),
    document.createElement("li"), document.createElement("li"),
    document.createElement("li"), document.createElement("li"),
    document.createElement("li"), document.createElement("li")];

var bg_li2 =
    [document.createElement("li"), document.createElement("li"),
    document.createElement("li"), document.createElement("li"),
    document.createElement("li"), document.createElement("li"),
    document.createElement("li"), document.createElement("li")];

drawImg();    

function drawImg(){
    //Percorrendo os dois arrays
    for (let i = 0; i < bg_li.length; i++) {
        for (let j = 0; j < bg_li2.length; j++) {

            const random = (min, max) => Math.random() * (max - min) + min;
            var positionY = null;

            //Impedir que as imagens apareçam enquanto estão sendo criadas
            bg_li[i].style.animationFillMode = "backwards";
            bg_li2[i].style.animationFillMode = "backwards";

            //Posição dog-paw da direita
            bg_li2[j].style.left = "80px";
            bg_li2[j].style.top = "-8px";

            bg_li[2].style.top = `${positionY}%`;

            //Criando a lista de elementos dentro da ul 
            bg_animation.appendChild(bg_li[i]);
            bg_animation2.appendChild(bg_li2[j]);
        }
    }
}


// const random = (min, max) => Math.random() * (max - min) + min;
    // const position = random(1, 10);
    // const delay = random(5, 0.1);


    // bg_li[i].style.animationFillMode = "backwards";

    // bg_li.style.bottom = `${size}px`;
    // if (i % 2 === 0) {
        // bg_li[i].style.left = `${position}%`;
    // } else {
        // bg_li[i].style.left = `${position}%`;
    //}

    // bg_li[i].style.animationDelay = `${delay}s`;



    // bg_animation.appendChild(bg_li[i]);