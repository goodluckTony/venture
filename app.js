var canvas = document.getElementById("canvas");
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
  } else if (failedShots == 3) {
    ctx.beginPath();
    ctx.moveTo(55, 72);
    ctx.lineTo(55, 140);
    ctx.moveTo(55, 140);
    ctx.lineTo(25, 190);
    ctx.stroke();
    alert("К-сть невдалих спроб: " + failedShots + " !");
  } else if (failedShots === 4) {
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
