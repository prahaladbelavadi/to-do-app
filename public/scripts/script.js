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
   $('.btn-success').on("Click", function(){
     $('#first-container').html("<h1>What have you achieved today ?<h1>");
   });


});
