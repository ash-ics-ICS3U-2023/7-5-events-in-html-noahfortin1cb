let score = 0;
let box = document.getElementById("box");
let scoreDisplay = document.getElementById("score");

box.addEventListener("click", points);
box.addEventListener("click", boxMover);

function boxMover() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let randomX = Math.floor(Math.random() * width);
    let randomY = Math.floor(Math.random() * height);

    box.style.left = randomX + "px";
    box.style.top = randomY + "px";
}
// W3Schools helped me woth this one

function points() {
    score++;
    scoreDisplay.textContent = "Score: " + score;
}
