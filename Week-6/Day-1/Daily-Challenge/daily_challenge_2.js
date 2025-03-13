const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

function toJs() {
  const promise_js = new Promise((resolve, reject) => {
    if (morse == "") {
      reject("Error: the input is empty");
    } else {
      const js_obj = JSON.parse(morse);
      resolve(js_obj);
    }
  });
  return promise_js;
}

// OBSERVATION: it seems strange to ask the user for a sentece, since there is no space key in the morse object.
function toMorse(morseJS) {
  const morse_msg = [];
  const keys = Object.keys(morseJS);
  const user_input = prompt("Type a word or a sentence: ").toLocaleLowerCase();

  const promise_message = new Promise((resolve, reject) => {
    const list_letters = [...user_input];
    for (let letter of list_letters) {
      if (keys.includes(letter)) {
        morse_msg.push(morseJS[letter]);
      } else {
        reject(`Error: letter ${letter} not included in morse dictionary.`);
      }
    }
    resolve(morse_msg);
  });
  return promise_message;
}

function joinWords(morseTranslation) {
  const body = document.querySelector("body");
  for (let code of morseTranslation) {
    const div = document.createElement("div");
    const text_node = document.createTextNode(code);
    div.appendChild(text_node);
    body.appendChild(div);
  }
}

toJs()
  .then((js_msg) => toMorse(js_msg))
  .then((morse_msg) => joinWords(morse_msg))
  .catch((error) => alert(error));
