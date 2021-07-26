$(function(){
  $('.right_nav_ul li').click(
    function(){
      $(this).children('.dropdown_menu').slideToggle();
    }
  )
  $('.right_nav_ul li').mouseenter(
    function(){
      $(this).children('.dropdown_menu').show();
    }
  )
  $('.right_nav_ul li').mouseleave(
    function(){
      $(this).children('.dropdown_menu').hide();
    }
  )
});
