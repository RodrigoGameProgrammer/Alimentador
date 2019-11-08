//https://canaldopet.ig.com.br/curiosidades/2017-12-20/curiosidades-cachorros.html

window.onload = function () {
    divDicas = document.getElementById("dicas")

    var dicas = ['','<h5 class="card-title center-text">Os cães se apaixonam</h5> O mesmo hormônio (oxitocina) que faz seu cachorro te amar loucamente, também o faz se apaixonar.  Ele é o hormônio do amor, responsável também pela interação do cão com o mundo ao seu redor:  o dono, familiares e outros cães.', 'Maria', 'Antonio', 'Joana', 
    '<h5 class="card-title center-text">Cães também sofrem de depressão</h5> Diferente do que os humanos pensam, muitas doenças caninas são similares às nossas, como é o caso da depressão. Os cães que ficam muito tempo sozinhos em casa, ou que não possuem momentos de atenção e lazer, são mais suscetíveis à doença. Outro manifestação da depressão dos cachorros, é quando estes têm alteração de ânimo conforme mudam as estações. <br> <center><b>Fonte:</b> canaldopet</center>'];
   
    var cores = ['','#FF8CFF','#FF1400','#80E8C9'];
    var mostraDicas = dicas[Math.ceil(Math.random() * (dicas.length - 1))];
    var mostraCores = cores[Math.ceil(Math.random() * (dicas.length - 1))];

    divDicas.innerHTML = mostraDicas;
    divDicas.style.color = mostraCores;
}