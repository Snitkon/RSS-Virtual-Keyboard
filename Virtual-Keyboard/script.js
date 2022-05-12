const body = document.querySelector("body");
const textarea = document.createElement("textarea");
const div = document.createElement("div");
const p = document.createElement("p");
let isCapslockOn = false;
let isShiftOn = false;
let isRus = false;
let template;
const keysList = [
  {
    class: "single-button",
    code: "Backquote",
    eng: "`",
    rus: "]",
    shiftEng: "~",
    shiftRus: "[",
  },
  {
    class: "single-button",
    code: "Digit1",
    eng: "1",
    rus: "1",
    shiftEng: "!",
    shiftRus: "!",
  },
  {
    class: "single-button",
    code: "Digit2",
    eng: "2",
    rus: "2",
    shiftEng: "@",
    shiftRus: '"',
  },
  {
    class: "single-button",
    code: "Digit3",
    eng: "3",
    rus: "3",
    shiftEng: "#",
    shiftRus: "№",
  },
  {
    class: "single-button",
    code: "Digit4",
    eng: "4",
    rus: "4",
    shiftEng: "$",
    shiftRus: "%",
  },
  {
    class: "single-button",
    code: "Digit5",
    eng: "5",
    rus: "5",
    shiftEng: "%",
    shiftRus: ":",
  },
  {
    class: "single-button",
    code: "Digit6",
    eng: "6",
    rus: "6",
    shiftEng: "^",
    shiftRus: ",",
  },
  {
    class: "single-button",
    code: "Digit7",
    eng: "7",
    rus: "7",
    shiftEng: "&",
    shiftRus: ".",
  },
  {
    class: "single-button",
    code: "Digit8",
    eng: "8",
    rus: "8",
    shiftEng: "*",
    shiftRus: ";",
  },
  {
    class: "single-button",
    code: "Digit9",
    eng: "9",
    rus: "9",
    shiftEng: "(",
    shiftRus: "(",
  },
  {
    class: "single-button",
    code: "Digit0",
    eng: "0",
    rus: "0",
    shiftEng: ")",
    shiftRus: ")",
  },
  {
    class: "single-button",
    code: "Minus",
    eng: "-",
    rus: "-",
    shiftEng: "_",
    shiftRus: "_",
  },
  {
    class: "single-button",
    code: "Equal",
    eng: "=",
    rus: "=",
    shiftEng: "+",
    shiftRus: "+",
  },
  {
    class: "double-button backspace",
    code: "Backspace",
    eng: "Backspace",
    rus: "Backspace",
    shiftEng: "Backspace",
    shiftRus: "Backspace",
  },
  {
    class: "double-button tab",
    code: "Tab",
    eng: "tab",
    rus: "tab",
    shiftEng: "tab",
    shiftRus: "tab",
  },
  {
    class: "single-button",
    code: "KeyQ",
    eng: "q",
    rus: "й",
    shiftEng: "Q",
    shiftRus: "Й",
  },
  {
    class: "single-button",
    code: "KeyW",
    eng: "w",
    rus: "ц",
    shiftEng: "W",
    shiftRus: "Ц",
  },
  {
    class: "single-button",
    code: "KeyE",
    eng: "e",
    rus: "у",
    shiftEng: "E",
    shiftRus: "У",
  },
  {
    class: "single-button",
    code: "KeyR",
    eng: "r",
    rus: "r",
    shiftEng: "R",
    shiftRus: "к",
  },
  {
    class: "single-button",
    code: "KeyT",
    eng: "t",
    rus: "е",
    shiftEng: "T",
    shiftRus: "Е",
  },
  {
    class: "single-button",
    code: "KeyY",
    eng: "y",
    rus: "н",
    shiftEng: "Y",
    shiftRus: "Н",
  },
  {
    class: "single-button",
    code: "KeyU",
    eng: "u",
    rus: "г",
    shiftEng: "U",
    shiftRus: "Г",
  },
  {
    class: "single-button",
    code: "KeyI",
    eng: "i",
    rus: "ш",
    shiftEng: "I",
    shiftRus: "Ш",
  },
  {
    class: "single-button",
    code: "KeyO",
    eng: "o",
    rus: "щ",
    shiftEng: "O",
    shiftRus: "Щ",
  },
  {
    class: "single-button",
    code: "KeyP",
    eng: "p",
    rus: "з",
    shiftEng: "P",
    shiftRus: "З",
  },
  {
    class: "single-button",
    code: "BracketLeft",
    eng: "[",
    rus: "х",
    shiftEng: "{",
    shiftRus: "Х",
  },
  {
    class: "single-button",
    code: "BracketRight",
    eng: "]",
    rus: "ъ",
    shiftEng: "}",
    shiftRus: "Ъ",
  },
  {
    class: "single-button",
    code: "Backslash",
    eng: "\\",
    rus: "ё",
    shiftEng: "|",
    shiftRus: "Ё",
  },
  {
    class: "double-button capslock",
    code: "CapsLock",
    eng: "caps lock",
    rus: "caps lock",
    shiftEng: "caps lock",
    shiftRus: "caps lock",
  },
  {
    class: "single-button",
    code: "KeyA",
    eng: "a",
    rus: "ф",
    shiftEng: "A",
    shiftRus: "Ф",
  },
  {
    class: "single-button",
    code: "KeyS",
    eng: "s",
    rus: "ы",
    shiftEng: "S",
    shiftRus: "Ы",
  },
  {
    class: "single-button",
    code: "KeyD",
    eng: "d",
    rus: "в",
    shiftEng: "D",
    shiftRus: "В",
  },
  {
    class: "single-button",
    code: "KeyF",
    eng: "f",
    rus: "а",
    shiftEng: "F",
    shiftRus: "А",
  },
  {
    class: "single-button",
    code: "KeyG",
    eng: "g",
    rus: "п",
    shiftEng: "G",
    shiftRus: "п",
  },
  {
    class: "single-button",
    code: "KeyH",
    eng: "h",
    rus: "р",
    shiftEng: "H",
    shiftRus: "Р",
  },
  {
    class: "single-button",
    code: "KeyJ",
    eng: "j",
    rus: "о",
    shiftEng: "J",
    shiftRus: "О",
  },
  {
    class: "single-button",
    code: "KeyK",
    eng: "k",
    rus: "л",
    shiftEng: "K",
    shiftRus: "Л",
  },
  {
    class: "single-button",
    code: "KeyL",
    eng: "l",
    rus: "д",
    shiftEng: "L",
    shiftRus: "Д",
  },
  {
    class: "single-button",
    code: "Semicolon",
    eng: ";",
    rus: "ж",
    shiftEng: ":",
    shiftRus: "Ж",
  },
  {
    class: "single-button",
    code: "Quote",
    eng: "'",
    rus: "э",
    shiftEng: '"',
    shiftRus: "Э",
  },
  {
    class: "double-button enter",
    code: "Enter",
    eng: "enter",
    rus: "enter",
    shiftEng: "enter",
    shiftRus: "enter",
  },
  {
    class: "double-button shift-left",
    code: "ShiftLeft",
    eng: "shift",
    rus: "shift",
    shiftEng: "shift",
    shiftRus: "shift",
  },
  {
    class: "single-button",
    code: "KeyZ",
    eng: "z",
    rus: "я",
    shiftEng: "Z",
    shiftRus: "Я",
  },
  {
    class: "single-button",
    code: "KeyX",
    eng: "x",
    rus: "ч",
    shiftEng: "X",
    shiftRus: "Ч",
  },
  {
    class: "single-button",
    code: "KeyC",
    eng: "c",
    rus: "c",
    shiftEng: "C",
    shiftRus: "C",
  },
  {
    class: "single-button",
    code: "KeyV",
    eng: "v",
    rus: "м",
    shiftEng: "V",
    shiftRus: "м",
  },
  {
    class: "single-button",
    code: "KeyB",
    eng: "b",
    rus: "и",
    shiftEng: "B",
    shiftRus: "И",
  },
  {
    class: "single-button",
    code: "KeyN",
    eng: "n",
    rus: "т",
    shiftEng: "N",
    shiftRus: "Т",
  },
  {
    class: "single-button",
    code: "KeyM",
    eng: "m",
    rus: "ь",
    shiftEng: "M",
    shiftRus: "Ь",
  },
  {
    class: "single-button",
    code: "Comma",
    eng: ",",
    rus: "б",
    shiftEng: "<",
    shiftRus: "Б",
  },
  {
    class: "single-button",
    code: "Period",
    eng: ".",
    rus: "ю",
    shiftEng: ">",
    shiftRus: "Ю",
  },
  {
    class: "single-button",
    code: "Slash",
    eng: "/",
    rus: "/",
    shiftEng: "/",
    shiftRus: "/",
  },
  {
    class: "double-button shift-right",
    code: "ShiftRight",
    eng: "shift",
    rus: "shift",
    shiftEng: "shift",
    shiftRus: "shift",
  },
  {
    class: "double-button control-left",
    code: "ControlLeft",
    eng: "ctrl",
    rus: "ctrl",
    shiftEng: "ctrl",
    shiftRus: "ctrl",
  },
  {
    class: "double-button alt-left",
    code: "AltLeft",
    eng: "alt",
    rus: "alt",
    shiftEng: "alt",
    shiftRus: "alt",
  },
  {
    class: "double-button command-left",
    code: "MetaLeft",
    eng: "cmd",
    rus: "cmd",
    shiftEng: "cmd",
    shiftRus: "cmd",
  },
  {
    class: "double-button space",
    code: "Space",
    eng: " ",
    rus: " ",
    shiftEng: " ",
    shiftRus: " ",
  },
  {
    class: "double-button command-right",
    code: "MetaRight",
    eng: "cmd",
    rus: "cmd",
    shiftEng: "cmd",
    shiftRus: "cmd",
  },
  {
    class: "double-button alt-right",
    code: "AltRight",
    eng: "alt",
    rus: "alt",
    shiftEng: "alt",
    shiftRus: "alt",
  },
  {
    class: "double-button arrow-left",
    code: "ArrowLeft",
    eng: "&larr;",
    rus: "&larr;",
    shiftEng: "&larr;",
    shiftRus: "&larr;",
  },
  {
    class: "double-button arrow-up",
    code: "ArrowUp",
    eng: "&uarr;",
    rus: "&uarr;",
    shiftEng: "&uarr;",
    shiftRus: "&uarr;",
  },
  {
    class: "double-button arrow-down",
    code: "ArrowDown",
    eng: "&darr;",
    rus: "&darr;",
    shiftEng: "&darr;",
    shiftRus: "&darr;",
  },
  {
    class: "double-button arrow-right",
    code: "ArrowRight",
    eng: "&rarr;",
    rus: "&rarr;",
    shiftEng: "&rarr;",
    shiftRus: "&rarr;",
  },
];

window.onload = () => {
  textarea.setAttribute("id", "textarea");
  body.append(textarea);
  div.setAttribute("id", "keyboard");
  body.append(div);
  p.setAttribute("id", "text");
  body.append(p);

  generateTemplate();
};

function backspace() {
  if (!textarea.innerHTML.length) return;
  const arr = textarea.innerHTML.split("");
  arr.pop();
  const str = arr.join("");
  textarea.innerHTML = str;
}

function generateTemplate() {
  template = keysList.reduce((prev, current) => {
    return prev + `<div class="${current.class}" data-code="${current.code}">${isRus ? current.rus : current.eng}</div>`;
  }, "");
  div.innerHTML = template;
}

function generateShiftTemplate() {
  template = keysList.reduce((prev, current) => {
    return (
      prev + `<div class="${current.class}" data-code="${current.code}">${isRus ? current.shiftRus : current.shiftEng}</div>`
    );
  }, "");
  div.innerHTML = template;
}

function activatePressedButton(template) {
  template.classList.add("active");
}

function diactivatePressedButton(template) {
  template.classList.remove("active");
}

function inputText(code, element) {
  if (
    [
      "ShiftLeft",
      "ShiftRight",
      "CapsLock",
      "ControlLeft",
      "AltLeft",
      "AltRight",
      "MetaRight",
      "MetaLeft",
      "Tab",
      "Enter",
      "ArrowLeft",
      "ArrowUp",
      "ArrowDown",
      "ArrowRight",
    ].includes(code)
  )
    return;
  if (isShiftOn) {
    textarea.innerHTML += isRus ? element.shiftRus : element.shiftEng;
    return;
  }
  if (isCapslockOn) {
    textarea.innerHTML += isRus ? element.rus.toUpperCase() : element.eng.toUpperCase();
    return;
  }
  textarea.innerHTML += isRus ? element.rus : element.eng;
}

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  isShiftOn = event.shiftKey;
  if (isShiftOn) {
    generateShiftTemplate();
  }

  if (event.code === "Enter") {
    textarea.innerHTML += "\n";
  }

  if (event.code === "Backspace") {
    backspace();
    return;
  }

  if (event.code === "Tab") {
    textarea.innerHTML += "    ";
  }

  isCapslockOn = event.getModifierState("CapsLock");

  if (event.altKey && event.ctrlKey) {
    isRus = !isRus;
    generateTemplate();
  }

  const currentTemplate = Array.from(div.children).find((element) => {
    return element.getAttribute("data-code") === event.code;
  });

  const currentElement = keysList.find((element) => {
    return event.code === element.code;
  });

  activatePressedButton(currentTemplate);
  inputText(event.code, currentElement);
});

document.addEventListener("keyup", (event) => {
  isShiftOn = event.shiftKey;
  if (!isShiftOn) {
    generateTemplate();
  }
  isCapslockOn = event.getModifierState("CapsLock");
  const currentTemplate = Array.from(div.children).find((element) => {
    return element.getAttribute("data-code") === event.code;
  });

  diactivatePressedButton(currentTemplate);
});

div.addEventListener("mousedown", (event) => {
  event.preventDefault();
  if (!event.target.getAttribute("data-code")) return;
  if (event.code === "Tab") {
    textarea.innerHTML += "    ";
  }

  const currentTemplate = Array.from(div.children).find((element) => {
    return element.getAttribute("data-code") === event.target.getAttribute("data-code");
  });

  const currentElement = keysList.find((element) => {
    return event.target.getAttribute("data-code") === element.code;
  });

  activatePressedButton(currentTemplate);
  inputText(event.target.getAttribute("data-code"), currentElement);
});

div.addEventListener("mouseup", (event) => {
  if (!event.target.getAttribute("data-code")) return;
  const currentTemplate = Array.from(div.children).find((element) => {
    return element.getAttribute("data-code") === event.target.getAttribute("data-code");
  });

  diactivatePressedButton(currentTemplate);
});

p.innerHTML += "Для переключения языка комбинация: левыe ctrl + alt <br> Клавиатура создана на системе macOS";
