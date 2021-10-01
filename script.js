//Modify the script.js to create a new <section> with a random background-color for each learners in your promo. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article>
let learners = ["Antoine Ghysens", "Aurore Remy", "Baptiste Geron", "Batsheba Deepijan", "Bruno Presti", "Fabrice Castrogiovanni", "Fanny Fraiture", "Francis François", "Frederic Van Overmeire", "JC Molhant", "Maxim K.", "Michael Tesfay", "Philippe Meulemans", "Raoni Gillet", "René", "Rouslan Boyko", "Stephane Genet", "Thomas Backers", "Tiffany Dessouroux"];
let place = document.getElementsByTagName('article')[0];

//Find a way so that everytime you load the page the order of the elements changes!
    for (let i = learners.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = learners[i];
      learners[i] = learners[j];
      learners[j] = temp;
    }

for (i=0;i<learners.length;i++){
let n = learners[i];
let sect = document.createElement('section');

let rgb1 = parseInt(Math.floor(Math.random()*256));
let rgb2 = parseInt(Math.floor(Math.random()*256));
let rgb3 = parseInt(Math.floor(Math.random()*256));
let bgColor = ("rgb(" + rgb1 + ", " + rgb2 + ", " + rgb3 + ")" );
sect.style.backgroundColor = bgColor;

let pstud = document.createElement('p');
let studName = document.createTextNode(n);
pstud.appendChild(studName);
sect.appendChild(pstud);
place.appendChild(sect);
//If the background is dark the text should be white, if the background is light the text should be black

function isLightOrDark([r,g,b]) {
    let hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))
     if (hsp>127.5){
         return 'light'
        }
     else {
         return 'dark'
        }
     }

if (isLightOrDark([rgb1, rgb2, rgb3])=='dark'){
        pstud.style.color = "white";
    }
    else{
        pstud.style.color = "black";
    }


}