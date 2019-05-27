//1.Nodevinēt mainīgos kurš iegūst ienākumu saraksta elemetu no html dokumenta
var ienakumu_saraksts = document.getElementsByClassName("income left list");
//2.Nodevinēt mainīgos kurš iegūst izdevumu saraksta elemetu no html dokumenta
var izdevumu_saraksts = document.getElementsByClassName("expenses right list");
//3.Nodevinēt mainīgos kurš iegūst pieejamā budžeta vertības elemetu no html dokumenta
var pieejamais_atlikums = document.getElementById ("budget__value");

var budzetaAtlikums = 0;
var budzetsHTML;
//4.Izveidot funkciju_1, kas izmaina pieejamā budžeta vertību
function funkcija_1 (atlikums) {
    pieejamais_budzets = parseInt(pieejamais_budzets.innerHTML,0) + parseInt(atlikums,0);
    pieejamais_budzets.innerHTML = budzetsHTML;
}
//5.Izveidot funkciju_2, kuru izsaucot, tiek pievienoti ienākumi vai izdevumi html elementu sarakstiem
function funkcija_2 () {
    var elements = document.createElement("DIV");
    elements.className += "list_item";

    
}
//6.Izveidot funkciju_3, kas izsaucas pēc pogas "pievienot" nospiešanas
//7.Funkcijai_3 jāpārbauda vai apraksta un summas lauks ir aizpildīts, ja nav, tad izvada paziņojumu par to, ka kāds no laukiem nav aizpildīts
//8.Funkcijai_3 ir jāizsauc funkcija_2, kas pievieno ienākumu vai izdevumu sarakstam jaunu ierakstu.

//9.Lai pārbaudītu vai izveidotās funkcijas darbojas pareizi, izsauc tās zemāk un ievieto fake datus
//10.Izsaukt funkciju_2, kas pievieno ienākumu sarakstam vertības
//11.Izsaukt funkciju_2, kas pievieno izdevumu sarakstam vertības
//12.Izsaukt funkciju_1, kas izmaina pieejamā budžeta vertību
