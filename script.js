let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");
let questionText = document.getElementById("question");
let catImage = document.getElementById("cat-img");

let yesQuestions = [
    "220 ba ean? :<",
    "Baka namali kalang nang tap, gi na :<",
    "22o tlga?",
    "Weh??",
    "Di nga?",
    "Bat parang napipilitan ka?",
    "D'wag na, parang napipilitan kalang eh"
];

let noQuestions = [
    "Pls?:<",
    "C-gurado naba ean?:<<",
    "Last chance??:<<<",
    "Baka gusto mo pag-isipan ulit?:<<<<",
    "Sakit mo nmn:<<<<<< peru pls?",
    "Baka kaya pato late game?:<<<<<<",
    "Ayaw mo maawa?:<<<<<<<<",
    "Kung ako nlng sana~~ baks nmn:<<<<<<<<<",
    "Awa nlng tlga baks,awa nlng:<<<<<<<<<",
    "Tigas nmn ng hart mo:<<"
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
            questionText.innerText = "🎉 YES! Peru bat parang masama loob mo?:<<";
            daming alamBtn.style.display = "none";
            oo ngaBtn.style.display = "none";
        }
        changeCatImage();
    } else {
        if (noIndex < noQuestions.length) {
            questionText.innerText = noQuestions[noIndex];
            noIndex++;
            yesSize += 5; // Palaki nang palaki ang Yes button
            yesBtn.style.fontSize = yesSize + "px";
        } else {
            questionText.innerText = "Tigas tlga nang puso! awa nlng ouh,sana makonsensya ka";
            pakekoBtn.style.display = "none";
            ano gagawin?Btn.style.display = "none";
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
