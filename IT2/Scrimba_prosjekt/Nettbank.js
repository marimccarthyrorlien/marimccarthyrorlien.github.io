
var btnInn = document.getElementById("btnInn");
var btnUt = document.getElementById("btnUt");
var ut = document.getElementById("ut");
var inn = document.getElementById("inn");
var konto = document.getElementById("konto"); //trenger ikke fordi den brukes ikke.
var sum = document.getElementById("sum");
var btnOverfor = document.getElementById("btnOverfor");
var dispBelop = document.getElementById("dispBelop");
var boks =document.getElementById("boks");

var endreB = 10000;
dispBelop.innerHTML += endreB;


btnInn.onclick = function () {
    endreB = endreB + Number(inn.value);
    dispBelop.innerHTML = endreB;

    boks.innerHTML += "<p>" + Number(inn.value) + "</p>";


};

btnUt.onclick = function () {
    endreB = endreB - Number(ut.value);
    dispBelop.innerHTML = endreB;

    boks.innerHTML += "<p>" + "-" + Number(ut.value) + "</p>";

};

btnOverfor.onclick = function () {
    endreB = endreB - Number(sum.value);
    dispBelop.innerHTML = endreB;

    boks.innerHTML += "<p>" + "-" + Number(sum.value) + "</p>";

};






