/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function escogeAleatorio(array) {
    let randomPosition = Math.floor(Math.random() * array.length);
    return array[randomPosition];
  }

  let randomWho = escogeAleatorio(who);
  let randomAction = escogeAleatorio(action);
  let randomWhat = escogeAleatorio(what);
  let randomWhen = escogeAleatorio(when);

  let excuse =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

  document.getElementById("excuse").innerHTML = excuse;
};
