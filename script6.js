var json1 = `{
    "NomeDaMusica": "Regina Let's go",
    "Lancamento": "Anos 2000",
    "imagem": "<img src='img/oooo.jpg' width='200px' height='200px'>"
}`;

var json2 = `{
    "NomeDaMusica": "Dias Atrás",
    "Lancamento": "2002",
    "imagem": "<img src='img/d.jpg' width='200px'>"
}`;

var json3 = `{
    "NomeDaMusica": "Não Sei Viver Sem Ter Você",
    "Lancamento": "2002",
    "imagem": "<img src='img/ultima.jpg' width='200px' height='200px'>"
}`;

var json4 = `{
    "NomeDaMusica": "Um Minuto Para o Fim do Mundo",
    "Lancamento": "2005",
    "imagem": "<img src='img/um minuto.jpg' width='200px'>"
}`;

var json5 = `{
    "NomeDaMusica": "Tarde de Outubro",
    "Lancamento": "2001",
    "imagem": "<img src='img/tarde.jpg' width='200px' height='200px'>"
}`;

var json6 = `{
    "NomeDaMusica": "O Mundo Dá Voltas",
    "Lancamento": "2000",
    "imagem": "<img src='img/regina2.jpg' width='200px' height='190px'>"
}`;

var data1 = JSON.parse(json1);
var data2 = JSON.parse(json2);
var data3 = JSON.parse(json3);
var data4 = JSON.parse(json4);
var data5 = JSON.parse(json5);
var data6 = JSON.parse(json6);




function Clique1() {
    document.getElementById('imagem').innerHTML = data1.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data1.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data1.Lancamento;
}

function Clique2() {
    document.getElementById('imagem').innerHTML = data2.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data2.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data2.Lancamento;
}

function Clique3() {
    document.getElementById('imagem').innerHTML = data3.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data3.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data3.Lancamento;
}

function Clique4() {
    document.getElementById('imagem').innerHTML = data4.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data4.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data4.Lancamento;
}

function Clique5() {
    document.getElementById('imagem').innerHTML = data5.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data5.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data5.Lancamento;
}

function Clique6() {
    document.getElementById('imagem').innerHTML = data6.imagem;
    document.getElementById('NomeDaMusica').innerHTML = data6.NomeDaMusica;
    document.getElementById('Lancamento').innerHTML = data6.Lancamento;
}
