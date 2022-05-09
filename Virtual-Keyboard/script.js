const body = document.querySelector("body");
let div = document.createElement("div");
div.setAttribute("id", "keyboard");
body.append(div);

const keyboardKey = [
  {
    class: "single-button",
    eng: "`",
    rus: "]",
    shiftEng: "~",
    shiftRus: "[",
    key: "Backquote",
  },
  {
    class: "single-button",
    key: "Digit1",
    eng: "1",
    rus: "1",
    shiftEng: "!",
    shiftRus: "!",
  },
  {
    class: "single-button",
    key: "Digit2",
    eng: "2",
    rus: "2",
    shiftEng: "@",
    shiftRus: '"',
  },
  {
    class: "single-button",
    key: "Digit3",
    eng: "3",
    rus: "3",
    shiftEng: "#",
    shiftRus: "№",
  },
  {
    class: "single-button",
    key: "Digit4",
    eng: "4",
    rus: "4",
    shiftEng: "$",
    shiftRus: "%",
  },
  {
    class: "single-button",
    key: "Digit5",
    eng: "5",
    rus: "5",
    shiftEng: "%",
    shiftRus: ":",
  },
  {
    class: "single-button",
    key: "Digit6",
    eng: "6",
    rus: "6",
    shiftEng: "^",
    shiftRus: ",",
  },
  {
    class: "single-button",
    key: "Digit7",
    eng: "7",
    rus: "7",
    shiftEng: "&",
    shiftRus: ".",
  },
  {
    class: "single-button",
    key: "Digit8",
    eng: "8",
    rus: "8",
    shiftEng: "*",
    shiftRus: ";",
  },
  {
    class: "single-button",
    key: "Digit9",
    eng: "9",
    rus: "9",
    shiftEng: "(",
    shiftRus: "(",
  },
  {
    class: "single-button",
    key: "Digit0",
    eng: "0",
    rus: "0",
    shiftEng: ")",
    shiftRus: ")",
  },
  {
    class: "single-button",
    key: "Minus",
    eng: "-",
    rus: "-",
    shiftEng: "_",
    shiftRus: "_",
  },
  {
    class: "single-button",
    key: "Equal",
    eng: "=",
    rus: "=",
    shiftEng: "+",
    shiftRus: "+",
  },
  {
    class: "double-button backspace",
    key: "Backspace",
    eng: "Backspace",
    rus: "Backspace",
  },
  {
    class: "double-button tab",
    key: "Tab",
    eng: "tab",
    rus: "tab",
  },
  {
    class: "single-button",
    key: "KeyQ",
    eng: "q",
    rus: "й",
    shiftEng: "Q",
    shiftRus: "Й",
  },
  {
    class: "single-button",
    key: "KeyW",
    eng: "w",
    rus: "ц",
    shiftEng: "W",
    shiftRus: "Ц",
  },
  {
    class: "single-button",
    key: "KeyE",
    eng: "e",
    rus: "у",
    shiftEng: "E",
    shiftRus: "У",
  },
  {
    class: "single-button",
    key: "KeyR",
    eng: "r",
    rus: "r",
    shiftEng: "R",
    shiftRus: "к",
  },
  {
    class: "single-button",
    key: "KeyT",
    eng: "t",
    rus: "е",
    shiftEng: "T",
    shiftRus: "Е",
  },
  {
    class: "single-button",
    key: "KeyY",
    eng: "y",
    rus: "н",
    shiftEng: "Y",
    shiftRus: "Н",
  },
  {
    class: "single-button",
    key: "KeyU",
    eng: "u",
    rus: "г",
    shiftEng: "U",
    shiftRus: "Г",
  },
  {
    class: "single-button",
    key: "KeyI",
    eng: "i",
    rus: "ш",
    shiftEng: "I",
    shiftRus: "Ш",
  },
  {
    class: "single-button",
    key: "KeyO",
    eng: "o",
    rus: "щ",
    shiftEng: "O",
    shiftRus: "Щ",
  },
  {
    class: "single-button",
    key: "KeyP",
    eng: "p",
    rus: "з",
    shiftEng: "P",
    shiftRus: "З",
  },
  {
    class: "single-button",
    key: "BracketLeft",
    eng: "[",
    rus: "х",
    shiftEng: "{",
    shiftRus: "Х",
  },
  {
    class: "single-button",
    key: "BracketRight",
    eng: "]",
    rus: "ъ",
    shiftEng: "}",
    shiftRus: "Ъ",
  },
  {
    class: "single-button",
    key: "Backslash",
    eng: "\\",
    rus: "ё",
    shiftEng: "|",
    shiftRus: "Ё",
  },
  {
    class: "double-button capslock",
    key: "CapsLock",
    eng: "caps lock",
    rus: "caps lock",
  },
  {
    class: "single-button",
    key: "KeyA",
    eng: "a",
    rus: "ф",
    shiftEng: "A",
    shiftRus: "Ф",
  },
  {
    class: "single-button",
    key: "KeyS",
    eng: "s",
    rus: "ы",
    shiftEng: "S",
    shiftRus: "Ы",
  },
  {
    class: "single-button",
    key: "KeyD",
    eng: "d",
    rus: "в",
    shiftEng: "D",
    shiftRus: "В",
  },
  {
    class: "single-button",
    key: "KeyF",
    eng: "f",
    rus: "а",
    shiftEng: "F",
    shiftRus: "А",
  },
  {
    class: "single-button",
    key: "KeyG",
    eng: "g",
    rus: "П",
    shiftEng: "G",
    shiftRus: "п",
  },
  {
    class: "single-button",
    key: "KeyH",
    eng: "h",
    rus: "р",
    shiftEng: "H",
    shiftRus: "Р",
  },
  {
    class: "single-button",
    key: "KeyJ",
    eng: "j",
    rus: "о",
    shiftEng: "J",
    shiftRus: "О",
  },
  {
    class: "single-button",
    key: "KeyK",
    eng: "k",
    rus: "л",
    shiftEng: "K",
    shiftRus: "Л",
  },
  {
    class: "single-button",
    key: "KeyL",
    eng: "l",
    rus: "д",
    shiftEng: "L",
    shiftRus: "Д",
  },
  {
    class: "single-button",
    key: "Semicolon",
    eng: ";",
    rus: "ж",
    shiftEng: ":",
    shiftRus: "Ж",
  },
  {
    class: "single-button",
    key: "Quote",
    eng: "'",
    rus: "э",
    shiftEng: '"',
    shiftRus: "Э",
  },
  {
    class: "double-button enter",
    key: "Enter",
    eng: "enter",
    rus: "enter",
  },
  {
    class: "double-button shift-left",
    key: "ShiftLeft",
    eng: "shift",
    rus: "shift",
  },
  {
    class: "single-button",
    key: "KeyZ",
    eng: "z",
    rus: "я",
    shiftEng: "Z",
    shiftRus: "Я",
  },
  {
    class: "single-button",
    key: "KeyX",
    eng: "x",
    rus: "ч",
    shiftEng: "X",
    shiftRus: "Ч",
  },
  {
    class: "single-button",
    key: "KeyC",
    eng: "c",
    rus: "c",
    shiftEng: "C",
    shiftRus: "C",
  },
  {
    class: "single-button",
    key: "KeyV",
    eng: "v",
    rus: "М",
    shiftEng: "V",
    shiftRus: "м",
  },
  {
    class: "single-button",
    key: "KeyB",
    eng: "b",
    rus: "и",
    shiftEng: "B",
    shiftRus: "И",
  },
  {
    class: "single-button",
    key: "KeyN",
    eng: "n",
    rus: "т",
    shiftEng: "N",
    shiftRus: "Т",
  },
  {
    class: "single-button",
    key: "KeyM",
    eng: "m",
    rus: "ь",
    shiftEng: "M",
    shiftRus: "Ь",
  },
  {
    class: "single-button",
    key: "Comma",
    eng: ",",
    rus: "б",
    shiftEng: "<",
    shiftRus: "Б",
  },
  {
    class: "single-button",
    key: "Period",
    eng: ".",
    rus: "ю",
    shiftEng: ">",
    shiftRus: "Ю",
  },
  {
    class: "single-button",
    key: "Slash",
    eng: "/",
    rus: "/",
    shiftEng: "?",
    shiftRus: "?",
  },
  {
    class: "double-button shift-right",
    key: "ShiftRight",
    eng: "shift",
    rus: "shift",
  },
  {
    class: "double-button control-left",
    key: "ControlLeft",
    eng: "ctrl",
    rus: "ctrl",
  },
  {
    class: "double-button alt-left",
    key: "AltLeft",
    eng: "alt",
    rus: "alt",
  },
  {
    class: "double-button command-left",
    key: "MetaLeft",
    eng: "cmd",
    rus: "cmd",
  },
  {
    class: "double-button space",
    key: "Space",
    eng: " ",
    rus: " ",
  },
  {
    class: "double-button command-right",
    key: "MetaRight",
    eng: "cmd",
    rus: "cmd",
  },
  {
    class: "double-button alt-right",
    key: "AltRight",
    eng: "alt",
    rus: "alt",
  },
  {
    class: "double-button arrow-left",
    key: "ArrowLeft",
    eng: "&larr;",
    rus: "&larr;",
  },
  {
    class: "double-button arrow-up",
    key: "ArrowUp",
    eng: "&uarr;",
    rus: "&uarr;",
  },
  {
    class: "double-button arrow-down",
    key: "ArrowDown",
    eng: "&darr;",
    rus: "&darr;",
  },
  {
    class: "double-button arrow-right",
    key: "ArrowRight",
    eng: "&rarr;",
    rus: "&rarr;",
  },
];

const template = keyboardKey.reduce((prev, current) => {
  return prev + `<div class="${current.class}" data-key="${current.key}">${current.eng}</div>`;
}, "");

div.insertAdjacentHTML("afterbegin", template);

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  const element = Array.from(div.children).find((element) => {
    return element.getAttribute("data-key") === event.code;
  });
  element.classList.add("active");
});

document.addEventListener("keyup", (event) => {
  const element = Array.from(div.children).find((element) => {
    return element.getAttribute("data-key") === event.code;
  });
  element.classList.remove("active");
});

div.addEventListener("mousedown", (event) => {
  if (event.target.getAttribute("data-key")) {
    event.target.classList.add("active");
  }
});

div.addEventListener("mouseup", (event) => {
  if (event.target.getAttribute("data-key")) {
    event.target.classList.remove("active");
  }
});
