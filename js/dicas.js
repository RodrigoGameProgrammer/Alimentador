//https://canaldopet.ig.com.br/curiosidades/2017-12-20/curiosidades-cachorros.html

window.onload = function () {
    divDicas = document.getElementById("dicas");
    bordaDicas = document.getElementsByClassName("bordaDicas");

    var dicas = ['',
        '<h5 class="card-title center-text"> Os cães se apaixonam </h5> O mesmo hormônio (oxitocina) que faz seu cachorro te amar loucamente, também o faz se apaixonar.  Ele é o hormônio do amor, responsável também pela interação do cão com o mundo ao seu redor:  o dono, familiares e outros cães.',
        '<h5 class="card-title center-text"> Por que alguns cachorros dormem de barriga para cima? </h5> Se o seu amigão tem esse hábito, pode apelidá-lo de paz e amor! Na natureza, os animais jamais fariam isso, porque ficariam mais vulneráveis. Peludos que dormem de barriga para cima se sentem seguros no ambiente em que vivem, e no verão pode ser uma forma de se refrescar.',
        '<h5 class="card-title center-text"> Por que os cachorros ficam com os olhos vermelhos nas fotos? </h5> Os cães têm uma membrana de tecido (Tapetum Lucidum) no fundo dos olhos que faz com que a luz passe duas vezes pela retina, ajudando-os a enxergar melhor no escuro. É por causa dela que quando usamos flash os olhos dos nossos peludos ficam vermelhos, verdes ou esbranquiçados.',
        '<h5 class="card-title center-text"> Chocolate pode ser fatal para o seu pet </h5> A teobromina - ingrediente presente no chocolate afeta o sistema nervoso central e o músculo cardíaco do cão. Essa substância provoca desde crises alérgicas, arritmias e até convulsões. Dependendo do tamanho do animal, uma pequena dose pode ser fatal.',
        '<h5 class="card-title center-text"> Cães também sofrem de depressão </h5> Diferente do que os humanos pensam, muitas doenças caninas são similares às nossas, como é o caso da depressão. Os cães que ficam muito tempo sozinhos em casa, ou que não possuem momentos de atenção e lazer, são mais suscetíveis à doença. Outro manifestação da depressão dos cachorros, é quando estes têm alteração de ânimo conforme mudam as estações.',
        '<h5 class="card-title center-text"> Os cachorros nos entendem </h5> Entendem não só o que você diz, mas também o jeito que diz, o tom e consegue até prever suas intenções. Você acha, muitas vezes, que ele se faz de desentendido, mas a realidade é que seu cãozinho está sempre atento ao que fala.',
        '<h5 class="card-title center-text"> O focinho de seu cãozinho é único </h5> Quem disse que eles não têm impressão digital? Têm sim! Seus narizes possuem ruguinhas e marquinhas incomparáveis - que nenhum outro cão possui igual. Ela é muito similar à nossa impressão digital, já que nenhuma é igual a outra.',
        '<h5 class="card-title center-text"> O barulho da chuva os incomoda </h5> Esse barulhinho, que tanto nos acalma nos fins de tarde, incomoda os cãezinhos. Isso porque eles possuem a audição muito mais apurada que a nossa, portanto, o barulho de uma tempestade pode ser inúmeras vezes mais impactante para eles.',
    ];

    var cores = ['', '#670DFF', '#EB7600', '#FF0DFE', '#FF7AFB', '#B300AD', '#B119FF', '#0D7BFF', '#E81C0C', '#FF0084', '#C600EB', '#E8A70C', '#13B300'];

    var mostraDicas = dicas[Math.ceil(Math.random() * (dicas.length - 1))];
    var mostraCores = cores[Math.ceil(Math.random() * (dicas.length - 1))];

    divDicas.innerHTML = mostraDicas;
    divDicas.style.color = mostraCores;
    bordaDicas[0].style.border = "1px solid" + mostraCores;
    bordaDicas[1].style.backgroundColor = mostraCores;

    console.log(mostraDicas);
    console.log(mostraCores);
}