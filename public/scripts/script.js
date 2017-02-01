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
//    });
//    $(".success").hover(function(){
//     alert("You entered p1!");
// },
// function(){
//     alert("Bye! You now leave p1!");
// });
//bind input character limit to variable to display number of characters that can be entered
  var su = success-input.length
    $("p").append(140-su);
  });


  //  $('.btn-success').on("Click", function(){
  //    $('.success').click(function(){
  //      $('.hidden').addClass('visible');
  //      $('.hidden').removeClass('hidden');
  //    })
   // Not Working    //  $('#first-container').html("<h1>What have you achieved today ?<h1>");
   });


});
