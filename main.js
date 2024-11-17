const pierre = document.getElementById("pierre");
const papier = document.getElementById("papier");
const ciseaux = document.getElementById("ciseaux");

let scoreUtilisateur = 0;
let scoreOrdinateur = 0;

pierre.addEventListener("click", () => {
    supprimer_recent();
    const choixOrdinateur = choixAleatoireOrdinateur();
    afficherpierre();
    determineGagnant("pierre", choixOrdinateur);
});

papier.addEventListener("click", () => {
    supprimer_recent();
    const choixOrdinateur = choixAleatoireOrdinateur();
    afficherpapier();
    determineGagnant("papier", choixOrdinateur);
});

ciseaux.addEventListener("click", () => {
    supprimer_recent();
    const choixOrdinateur = choixAleatoireOrdinateur();
    afficherciseaux();
    determineGagnant("ciseaux", choixOrdinateur);
});

function afficherpierre() {
    const pierre_img = document.createElement("div");
    pierre_img.innerHTML = '<div>l_utilisateur</div><div><img class="img" src="pierre.png" alt="pierre"></div>';
    document.getElementById("your_action").appendChild(pierre_img);
}


function afficherpapier() {
    const papier_img = document.createElement("div");
    papier_img.innerHTML = '<div>l_utilisateur</div><div><img class="img" src="papier.png" alt="papier"></div>';
    document.getElementById("your_action").appendChild(papier_img);
}



function afficherciseaux() {
    const ciseaux_img = document.createElement("div");
    ciseaux_img.innerHTML = '<div>l_utilisateur</div><div><img class="img" src="ciseaux-ouvert-forme-doutil.png" alt="ciseaux"></div>';
    document.getElementById("your_action").appendChild(ciseaux_img);
}

function supprimer_recent() {
    const your_action = document.getElementById("your_action");
    if (your_action.hasChildNodes()) {
        your_action.removeChild(your_action.firstChild);
    }

    const ordinateur_action = document.getElementById("ordinateur_action");
    if (ordinateur_action.hasChildNodes()) {
        ordinateur_action.removeChild(ordinateur_action.firstChild);
    }
}

function choixAleatoireOrdinateur() {
    const choix = ["pierre", "papier", "ciseaux"];
    const choixAleatoire = choix[Math.floor(Math.random() * choix.length)];
    const imageSrc = choixAleatoire === "pierre" ? "pierre.png" : choixAleatoire === "papier" ? "papier.png" : "ciseaux-ouvert-forme-doutil.png";

    const ordinateur_img = document.createElement("div");
    ordinateur_img.innerHTML = `<div>ordinateur</div><div><img class="img" src="${imageSrc}" alt="Choix ordinateur"></div>`;
    document.getElementById("ordinateur_action").appendChild(ordinateur_img);
    return choixAleatoire; 
}

function determineGagnant(choixUtilisateur, choixOrdinateur) {
    let resultatTexte;  

    if (choixUtilisateur === choixOrdinateur) {
        resultatTexte = "draw";
    } else if (
        (choixUtilisateur === "pierre" && choixOrdinateur === "ciseaux") ||
        (choixUtilisateur === "papier" && choixOrdinateur === "pierre") ||
        (choixUtilisateur === "ciseaux" && choixOrdinateur === "papier")
    ) {
        resultatTexte = "win"; 
        scoreUtilisateur++ ;
    } else {
        resultatTexte = "lose";
        scoreOrdinateur++ ;
    }
    document.getElementById("score_ordinateur").innerText = `Ordinateur: ${scoreOrdinateur}`;
    document.getElementById("score_utilisateur").innerText = `Utilisateur: ${scoreUtilisateur}`;
   


    document.getElementById("resultat").innerHTML = resultatTexte;
}