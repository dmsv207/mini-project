let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");

let normalHandStyle = () => {
  handL.style.cssText =
    "height: 2.81em; top: 8.4em; left: 7.5em; transform: rotate(0deg);";
  handR.style.cssText =
    "height: 2.81em; top: 8.4em; right: 7.5em; transform: rotate(0deg);";
};

passwordRef.addEventListener("focus", () => {
  handL.style.cssText =
    "height: 6.56em; top: 3.87em; left: 11.75em; transform: rotate(-180deg);";
  handR.style.cssText =
    "height: 6.56em; top: 3.87em; right: 11.75em; transform: rotate(180deg);";
  normalEyeStyle();
});

// When clicked outside username and password input
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != usernameRef && clickedElem != passwordRef) {
    normalHandStyle();
  }
});