import { getCookie } from "./cookieHandler";

function loadNavbar(){
    let path="../src/navbar.html";

    fetch(path)
    .then((response)=>{
        if (response.ok) {
            return response.text();
        }
        throw new Error('Something went wrong');
    })
    .then(text=> document.getElementById('nav').innerHTML = text)
    .catch((error)=>{
        console.log(error)
        document.getElementById('nav').innerHTML = "<p>Une erreur est apparu, recharger la page<p>";
    });
}
window.loadNavbar = loadNavbar;


function reverse(){
    window.location.replace(getCookie('previous'));
}
window.reverse = reverse;