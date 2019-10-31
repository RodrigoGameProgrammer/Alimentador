//Pegando a ul do HTML que vai ser animada
const bg_animation = document.querySelector("ul.bg-animation");

for (let i = 0; i < 8; i++) {

    //Criando a li(lista) para inserir as animações
    const bg_li = document.createElement("li");

    //Variavel para deixar a posição, o delay e a duração aleatorio
    const random = (min,max) => Math.random() * (max - min) + min;
        
    const position = random(1, 99);
    const delay = random(5, 0.1);
    const duration = random(5,10);

    //Mudando o estado da animação
    bg_li.style.animationFillMode = "backwards";

    //Colocando as variaveis random nos atributos
    bg_li.style.left = `${position}%`;
    bg_li.style.animationDelay = `${delay}s`;
    bg_li.style.animationDuration = `${duration}s`

    //Pegando os filhos da ul e colocando atributos diferentes em cada uma
    bg_animation.appendChild(bg_li);
}
