function Roll(){
  // For dice 1
  var randomNumber1  = Math.random();
  var  randomNumber1 = randomNumber1 * 6;
  var randomNumber1 = Math.floor(randomNumber1) + 1; // 1 to 6

  var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1 to dice6
  var randomImageSource1 = "images/" + randomDiceImage1; // image/dice1.png to images/dice6.png

  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource1);

  // For dice 2
  var randomNumber2  = Math.random();
  var  randomNumber2 = randomNumber2 * 6;
  var randomNumber2 = Math.floor(randomNumber2) + 1; // 1 to 6

  var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1 to dice6
  var randomImageSource2 = "images/" + randomDiceImage2; // image/dice1.png to images/dice6.png

  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);

  if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  } else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  }
}
