fetchData();

async function fetchData() {
  try {
    let response = await fetch("./questions.json");
    let data = await response.json();

    let randomNr = Math.floor(Math.random() * data.length);

    let question = data[randomNr].Frage.replace(/</g, "&lt;").replace(
      />/g,
      "&gt;"
    );

    answer = data[randomNr].Antwort.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    let optionA = data[randomNr].A.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let optionB = data[randomNr].B.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let optionC = data[randomNr].C.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let optionD = data[randomNr].D.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    document.getElementById("question").innerHTML = question;
    document.getElementById("A-label").innerHTML = "A) " + optionA;
    document.getElementById("B-label").innerHTML = "B) " + optionB;
    document.getElementById("C-label").innerHTML = "C) " + optionC;
    document.getElementById("D-label").innerHTML = "D) " + optionD;
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("A").addEventListener("click", function () {
  answerCheck("A");
});
document.getElementById("B").addEventListener("click", function () {
  answerCheck("B");
});
document.getElementById("C").addEventListener("click", function () {
  answerCheck("C");
});
document.getElementById("D").addEventListener("click", function () {
  answerCheck("D");
});

var isAnswerSelected = false;

function answerCheck(par) {
  if (isAnswerSelected == true) {
    return;
  }
  let label = document.getElementById(par + "-label");

  if (answer == par) {
    label.style.backgroundColor = "green";
    isAnswerSelected = true;
  } else {
    label.style.backgroundColor = "red";
    label = document.getElementById(answer + "-label");
    label.style.backgroundColor = "green";
    isAnswerSelected = true;
  }

  setTimeout(reload, 2500);

  function reload() {
    location.reload();
  }
}
