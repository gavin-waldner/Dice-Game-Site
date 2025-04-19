document.addEventListener("DOMContentLoaded", function () {
    // Generate random numbers for both players
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // dice number 1-6 for Player 1
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // dice number 1-6 for Player 2

    // Update images for both players
    var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png for Player 1
    var randomImageSource1 = "images/" + randomDiceImage1;
    var img1 = document.querySelector(".img1");
    img1.setAttribute("src", randomImageSource1);

    var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png for Player 2
    var randomImageSource2 = "images/" + randomDiceImage2;
    var img2 = document.querySelector(".img2");
    img2.setAttribute("src", randomImageSource2);

    // Update title to display winner or draw
    var title = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        title.textContent = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        title.textContent = "Player 2 Wins!";
    } else {
        title.textContent = "It's a Draw!";
    }
});
