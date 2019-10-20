const bg_animation = document.querySelector("ul.bg-animation");

for (let i = 0; i < 8; i++) {

    const bg_li = document.createElement("li");

    const random = (min,max) => Math.random() * (max - min) + min;
        
    const position = random(1, 99);
    const delay = random(5, 0.1);
    const duration = random(5,10);

    bg_li.style.animationFillMode = "backwards";

    bg_li.style.left = `${position}%`;

    bg_li.style.animationDelay = `${delay}s`;
    bg_li.style.animationDuration = `${duration}s`

    bg_animation.appendChild(bg_li);
    
}
