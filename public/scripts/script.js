$(document).ready(function() {
   $('button').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('button').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       });
   });
   $('button').click(function() {
       $(this).toggle(1000);
   });
   $('button .btn-success').on("Click", function(){
// Not Working    //  $('#first-container').html("<h1>What have you achieved today ?<h1>");
   });


});
