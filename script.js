const numpad = document.querySelector("#numpad");

for(let i = 0; i < 10; i++){
    let digit = document.createElement("button");
    digit.classList.toggle("digit");
    digit.innerText = i;
    numpad.appendChild(digit);
}