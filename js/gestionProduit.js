import {getProduitsListFromEvenement} from "../api/getProduitsListFromEvenement";

let produits = [];
//let produits = [nom, prix, qte];
let htmlSelection = "";

export function listProduit(){
    let list = getProduitsListFromEvenement(1);
    let long = list.length;
    let html = '';
    let i = 0;
    list.forEach((item) => {
        if(i == list.length && i%2 == 0){
            html += '<div class="alignProduits">'
            html += '<div class="produitOption border color'+((i%4)+1)+'">'+item+'</div>';
            html += '</div>';
        }else{
            if(i%2 == 0){
                html += '<div class="alignProduits">';
                html += '<div class="produitOption border color'+((i%4)+1)+'">Un Jeton</div>';
            }else{
                html += '<div class="produitOption border color'+((i%4)+1)+'">Un Jeton</div>';
                html += '</div>';
            }
        }
        i++;
    })
    document.getElementById("produits").innerHTML = html;
}
window.listProduit = listProduit;

function addListSelection(nom){
    let pos;
    let exist = false;
    produits.forEach((item) => {
        if(item.includes(nom)){
            exist = true;
            pos = produits.indexOf(item);
        }
    })
    if(exist){
        html = "<tr id=select"+pos+"><td>"+nom+"</td><td>x"+produits[pos][3]+"</td><td><div><button onclick='removeListSelection("+nom+")'>-</button></div></td></tr>";
        document.getElementById("select"+pos).innerHTML = html;
        produits[pos][3] += 1;
    }else{
        html = "<tr id=select"+pos+"><td>"+nom+"</td><td>x1</td><td><div><button onclick=''>-</button></div></td></tr>";
        produits += [nom, prix, 1];
        document.getElementById("tableSelect").innerHTML += html;
    }
}

function removeListSelection(nom){let pos;
    let exist = false;
    produits.forEach((item) => {
        if(item.includes(nom)){
            exist = true;
            pos = produits.indexOf(item);
        }
    })
    if(exist){
        if(produits[pos][3] == 1){
            produits.splice(pos, 1);    
        }else{
            produits[pos][3] -= 1;
            html = "<tr id=select"+pos+"><td>"+nom+"</td><td>x"+produits[pos][3]+"</td><td><div><button onclick=''>-</button></div></td></tr>";
            document.getElementById("select"+pos).innerHTML = html;
        }
    }else{
        console.error("produit exist pas")
    }
}
