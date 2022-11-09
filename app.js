const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const words = ["програма", "макака", "прекрасний", "оладка"];
const word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];

for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
};

const remainingLetters = word.length;
let failedShots = 0;

const hiddenWords = document.querySelector(".hidden-words");
const guess = document.querySelector(".guess").value;
const hint = document.querySelector(".hint");



const checkAnswerButton = document.querySelector(".check-answer-button");
checkAnswerButton.addEventListener("click", () => {
  hiddenWords.value = answerArray.join(" ");
hint.value = "Вгадай букву.";
  if (guess.length !== 1) {
    hint.value = "Будь ласка, введи одну букву.";
  } else {
    var found = false;
    // Оновлюємо стан гри
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess.value) {
        answerArray[j] = guess.value;
        found = true;
        remainingLetters--;
      }
    };
    if (!found) {
      drawMan(failedShots);
      failedShots++;
    }
    hiddenWords.value = answerArray.join(" ");
  }
  guess.value = "";

});





/* var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Створюємо масив з словами
var words = ["програма", "макака", "прекрасний", "оладка"];

// Вибираємо випадкове слово
var word = words[Math.floor(Math.random() * words.length)];

// Створюємо ігровий масив
var answerArray = [];

for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

var failedShots = 0;

// Ігровий цикл
while (remainingLetters > 0) {
// Показуємо стан гри
  alert(answerArray.join(" "));
// Запитуємо варіант відповіді
  var guess = prompt("Вгадай букву, або нажми кнопку Відміна для виходу з гри.");
  if (guess === null) {

    // Виходимо з ігрового циклу
    break;
  } else if (guess.length !== 1) {
    alert("Будь ласка, введи одну букву.");
  } else {

    var found = false;
    // Оновлюємо стан гри
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        found = true;
        remainingLetters--;
      }
    }

    if (!found) {
      drawMan(failedShots);
      failedShots++;
    }
  }
  // Кінець ігрового циклу
}

// малюємо чоловічка частинами
function drawMan(failedShots) {
  ctx.lineWidth = 5;
  if (failedShots === 0) {
    alert("Круто, ти на вірному шляху!");
  } else if (failedShots === 1) {
    ctx.strokeRect(40, 40, 30, 30);
    alert("К-сть невдалих спроб: " + failedShots + " !");
  } else if (failedShots === 2) {
    ctx.strokeRect(40, 40, 30, 30);
    ctx.beginPath();
    ctx.moveTo(55, 72);
    ctx.lineTo(55, 140);
    ctx.stroke();
    alert("К-сть невдалих спроб: " + failedShots + " !");
  } else if (failedShots === 3) {
    ctx.strokeRect(40, 40, 30, 30);
    ctx.beginPath();
    ctx.moveTo(55, 72);
    ctx.lineTo(55, 140);
    ctx.moveTo(55, 140);
    ctx.lineTo(25, 190);
    ctx.stroke();
    alert("К-сть невдалих спроб: " + failedShots + " !");
  } else if (failedShots === 4) {
    ctx.strokeRect(40, 40, 30, 30);
    ctx.beginPath();
    ctx.moveTo(55, 72);
    ctx.lineTo(55, 140);
    ctx.moveTo(55, 140);
    ctx.lineTo(25, 190);
    ctx.moveTo(55, 140);
    ctx.lineTo(80, 190);
    ctx.stroke();
    alert("К-сть невдалих спроб: " + failedShots + " !");
  } else if (failedShots === 5) {
    ctx.strokeRect(40, 40, 30, 30);
    ctx.beginPath();
    ctx.moveTo(55, 72);
    ctx.lineTo(55, 140);
    ctx.moveTo(55, 140);
    ctx.lineTo(25, 190);
    ctx.moveTo(55, 140);
    ctx.lineTo(80, 190);
    ctx.moveTo(55, 95);
    ctx.lineTo(15, 80);
    ctx.stroke();
    alert("К-сть невдалих спроб: " + failedShots + " !");
  } else if (failedShots === 6) {
    ctx.strokeRect(40, 40, 30, 30);
    ctx.beginPath();
    ctx.moveTo(55, 72);
    ctx.lineTo(55, 140);
    ctx.moveTo(55, 140);
    ctx.lineTo(25, 190);
    ctx.moveTo(55, 140);
    ctx.lineTo(80, 190);
    ctx.moveTo(55, 95);
    ctx.lineTo(15, 80);
    ctx.moveTo(55, 95);
    ctx.lineTo(95, 80);
    ctx.stroke();
    alert("Ти програв!");
  }
};


// Показуємо відповідь та вітаємо гравця
alert(answerArray.join(" "));
alert("Чудово! Було загадано слово " + word);
 */
/* const titleImgSeletion1 = document.querySelector(".title-right-selective-img-1");
titleImgSeletion1.addEventListener("click", () => {
document.querySelector(".title-right-active-img").src="img/bouquet_4.png";
document.querySelector(".title-rpc-active").classList.remove("title-rpc-active");
document.querySelector("#circle1").classList.add("title-rpc-active");
}); */