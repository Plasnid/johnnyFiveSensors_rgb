/**
 * 
 * for the sketch for wiring, visit 
 * 
 * http://johnny-five.io/examples/led-rgb-anode/
 * 
 * challenge:  make the light switch colour between red, green and blue every two seconds
 */

var five = require("johnny-five");
var board = new five.Board();
var anode;

function reddy(){
  setTimeout(greeny, 2000);
}
function greeny(){
  setTimeout(bluey,2000);
}
function bluey(){
  setTimeout(reddy, 2000);
}

board.on("ready", function() {
  anode = new five.Led.RGB({
    pins: {
      red: 6,
      green: 5,
      blue: 3
    },
    isAnode: true
  });

  // Add led to REPL (optional)
  this.repl.inject({
    anode: anode
  });

  // Turn it on and set the initial color
  anode.on();
  reddy();
  //anode.blink(1000);

});