/*
  -- moved var to index
  var countDownDate = new Date("Sep 5, 2020 00:00:00").getTime();
*/
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if ( distance < 0 ) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Love you <3";
  }
}, 1000);