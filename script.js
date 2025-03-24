let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");
let questionText = document.getElementById("question");
let catImage = document.getElementById("cat-img");

let yesQuestions = [
    "220 ba ean? :< (oo nga / jk lng)",
    "Baka namali kalang nang tap, gi na :< (sorry:< / 22o nga)",
    "22o tlga? (oo nga / hindi)",
    "Weh?? (oo nga / Hindi eh)",
    "Di nga? (oo nga / Ayoko na)",
    "Bat parang napipilitan ka? (Medyo lang / Oo nga eh)",
    "D'wag na, parang napipilitan kalang eh (Hindi / Okay sige ayoko na / Ewan)"
];

let noQuestions = [
    "Pls?:< (Sige na nga / Ayoko)",
    "C-gurado naba ean?:<< (Oo naman! / Ewan)",
    "Last chance:<<< (Bakit ba kasi / No pa rin)",
    "Baka gusto mo pag-isipan ulit?:<<<< (No is no / Pwede next time?)",
    "Sakit mo nmn:<<<<<< peru pls? (sorry / No pa rin)",
    "Baka kaya pato late game?:<<<<<< (Malay mo / Di talaga)",
    "Ayaw mo maawa?:<<<<<<<< (Wala akong awa / Sige na nga)",
    "Kung ako nlng sana~~ baks nmn:<<<<<<<<< (ayuko nga / pakeko)",
    "Awa nlng tlga baks,awa nlng:<<<<<<<<< (Awa lang pero no pa rin / Baka)",
    "Tigas nang hart mo! (Okay fine sige na / Talaga)"
];

let yesIndex = 0;
let noIndex = 0;
let yesSize = 18; // Initial font size for Yes button

function nextQuestion(answer) {
    if (answer === "yes") {
        if (yesIndex < yesQuestions.length) {
            questionText.innerText = yesQuestions[yesIndex];
            yesIndex++;
        } else {
            questionText.innerText = "🎉 YES! Edi tayo na 😍";
            yesBtn.style.display = "none";
            noBtn.style.display = "none";
        }
        changeCatImage();
    } else {
        if (noIndex < noQuestions.length) {
            questionText.innerText = noQuestions[noIndex];
            noIndex++;
            yesSize += 5; // Palaki nang palaki ang Yes button
            yesBtn.style.fontSize = yesSize + "px";
        } else {
            questionText.innerText = "😭 Hala, di ka talaga nadala... Okay lang, move on na ako. *sobs*";
            yesBtn.style.display = "none";
            noBtn.style.display = "none";
        }
        changeCatImage();
    }
}

function changeCatImage() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    catImage.src = `cat${randomNum}.png`;
    catImage.style.transform = "rotate(10deg)";
    setTimeout(() => {
        catImage.style.transform = "rotate(0deg)";
    }, 500);
}
