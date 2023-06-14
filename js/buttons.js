function affichePayment(){
    document.getElementById("payment").style.display="initial";
    document.getElementById("hide").style.display="initial";
}
window.affichePayment = affichePayment;

function retirePayment(){
    document.getElementById("payment").style.display="none";
    document.getElementById("hide").style.display="none";
}
window.retirePayment = retirePayment;

function afficheCalcul(){
    document.getElementById("calcul").style.display="initial";
}
window.afficheCalcul = afficheCalcul;

function retireCalcul(){
    document.getElementById("calcul").style.display="none";
}
window.retireCalcul = retireCalcul;

function calcul(){
    let num = document.getElementById("toCalcul").value;
    if(num-4 >= 0){
        document.getElementById("result").innerHTML = num-4;
        document.getElementById("msgCalcul").innerHTML = "";
    }else{
        document.getElementById("result").innerHTML = num-4;
        document.getElementById("msgCalcul").innerHTML = "Il n'y a pas assez d'argent";
    }
}
window.calcul = calcul;



//document.getElementById("toCalcul").addEventListener("onchange",)