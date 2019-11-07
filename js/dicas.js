window.onload = function () {

    var dicas = ['João', 'Maria', 'Antonio', 'Joana'];
    var mostraDicas = dicas[Math.ceil(Math.random() * (dicas.length - 1))];
    console.log(mostraDicas);

}