
//Make the file JQuery ready
$(document).ready(function() {

// ========================================VARIABLES====================================================================

//Creating a new variable called the targetNumber- between 19-120 (this is what the user will aim to)
var targetNumber = Math.floor(Math.random() * 101) + 19;

//Setting the target Number div to match the targetNumber variable. This will change the HTML 
$("#targetNumber").text(targetNumber);

//Random value of green crystal between 1 & 12
var randomGreen = Math.floor(Math.random() * 11) + 1;

//Random value of orange crystal between 1 & 12
var randomOrange = Math.floor(Math.random() * 11) + 1;

//Random value of pink crystal between 1 & 12
var randomPink = Math.floor(Math.random() * 11) + 1;;

//Random value of yellow crystal between 1 & 12
var randomYellow = Math.floor(Math.random() * 11) + 1;

//Creating a variable for number of wins
var wins = 0;

//Creating a variable for number of losses
var losses = 0;

//Creating a counter variable, this will track the user's total
var counter = 0;


//=====================================ON-CLICK FUNCTIONS================================================================


// Creation of an on-click event that responds to button clicks of the green crystal image.
  $(".green-crystal").on("click", function() {

  	//Each time the green crystal is clicked, the counter increases by 1
  	counter += randomGreen;
  	//Setting the totalScore div to match the counter variable. It will change the HTML
	   console.log(counter)
	   $("#totalScore").text(counter);

    //To determine wins and losses, the following conditions are specified:
    if (counter === targetNumber) {

      // If the target is reached, alerts a Win
      alert("You win!");
      //Incrementing the number of wins
      wins++;
      //checking if the number of wins increments
	    console.log("Number of wins is: " + wins);
	    //appending to the HTML
	    $('#wins').text(wins);
      //set to Reset
	    toReset();
    }
    else if (counter > targetNumber) {
    	// Then they are alerted with a loss.
      alert("You lose!!");
      //Incrementing the number of losses
      losses++;
      //checking if the number of losses increments
	    console.log("Number of losses is: " + losses);
	    //appending to the HTML
	    $('#losses').text(losses);
      //set to Reset
	    toReset();

    }

  });


  $(".orange-crystal").on("click", function() {

  	//Each time the orange crystal is clicked, the counter increases by 1
  	counter += randomOrange;
  	
  	//Setting the totalScore div to match the counter variable. It will change the HTML
	  console.log(counter)
	  $("#totalScore").text(counter);

    //To determine wins and losses, the following conditions are specified:
    if (counter === targetNumber) {

      // If the target is reached, alerts a Win
      alert("You win!");
      //Incrementing the number of wins
      wins++;
      //checking if the number of wins increments
	  console.log("Number of wins is: " + wins);
	  //appending to the HTML
	  $('#wins').text(wins);
	  toReset();
    }
    else if (counter > targetNumber) {
    	
    	// Then they are alerted with a loss.
      alert("You lose!!");
      //Incrementing the number of losses
      losses++;
      //checking if the number of losses increments
	    console.log("Number of losses is: " + losses);
	    //appending to the HTML
	    $('#losses').text(losses);
	    toReset();
	}
  });


  $(".pink-crystal").on("click", function() {

  	//Each time the pink crystal is clicked, the counter increases by 1
  	counter += randomPink;

    //Setting the totalScore div to match the counter variable. It will change the HTML
	  console.log(counter)
	  $("#totalScore").text(counter);

    //To determine wins and losses, the following conditions are specified:
    if (counter === targetNumber) {

      // If the target is reached, alerts a Win
      alert("You win!");
      //Incrementing the number of wins
      wins++;
      //checking if the number of wins increments
	    console.log("Number of wins is: " + wins);
	    //appending to the HTML
	    $('#wins').text(wins);
	    toReset();
    }
    else if (counter > targetNumber) {
    	
    	// Then they are alerted with a loss.
      alert("You lose!!");
      //Incrementing the number of wins
      losses++;
      //checking if the number of wins increments
	    console.log("Number of losses is: " + losses);
	    //appending to the HTML
	    $('#losses').text(losses);
	    toReset();
	}
  });


  $(".yellow-crystal").on("click", function() {

  	//Each time the yellow crystal is clicked, the counter increases by 1
  	counter += randomYellow;

    //Setting the totalScore div to match the counter variable. It will change the HTML
	  console.log(counter)
	  $("#totalScore").text(counter);

    //To determine wins and losses, the following conditions are specified:
    if (counter === targetNumber) {

      // If the target is reached, alerts a Win
      alert("You win!");
      //Incrementing the number of wins
      wins++;
      //checking if the number of wins increments
	    console.log("Number of wins is: " + wins);
	    //appending to the HTML
	    $('#wins').text(wins);
	    toReset();

    }
    else if (counter > targetNumber) {
    	
    	// Then they are alerted with a loss.
      alert("You lose!!");
      //Incrementing the number of wins
      losses++;
      //checking if the number of losses increments
	    console.log("Number of losses is: " + losses);
	    //appending to the HTML
	    $('#losses').text(losses);
	    //resetting the game
	    toReset();
	}

  });

  //============================================FUNCTIONS=======================================================

//Function that will reset the game
  function toReset() {
  	counter = 0;
  	$('#totalScore').text(counter);
  	targetNumber = Math.floor(Math.random() * 101) + 19;
  	$("#targetNumber").text(targetNumber);
  	randomGreen = Math.floor(Math.random() * 11) + 1;
  	randomOrange = Math.floor(Math.random() * 11) + 1;
	  randomPink = Math.floor(Math.random() * 11) + 1;
	  randomYellow = Math.floor(Math.random() * 11) + 1;
  }

});