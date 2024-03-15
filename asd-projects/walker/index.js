/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  var KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13
  };
  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0
  };
  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      console.log("left pressed");
      walker.speedX = -5;
    }
    if (event.which === KEY.RIGHT) {
      console.log("right pressed");
      walker.speedX = 5;
    }
    if (event.which === KEY.UP) {
      console.log("up pressed");
      walker.speedY = 5;
    }
    if (event.which === KEY.DOWN) {
      console.log("down pressed");
      walker.speedY = -5;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem() {
    positionX += speedX; // update the position of the box along the x-axis
    positionY += speedY; // update the position of the box along the x-axis
  }
  
  function redrawGameItem() {
    $("#walker").css("left", positionX); // draw the walker in the new location, positionX pixels away from the "left"
    $("#walker").css("right", positionX); // draw the walker in the new location, positionX pixels away from the "right"
    $("#walker").css("up", positionY); // draw the walker in the new location, positionY pixels away from the "up"
    $("#walker").css("down", positionY); // draw the walker in the new location, positionY pixels away from the "down"
  }
  
}
