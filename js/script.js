$(function(){

  // at_click
  $('.right_nav_ul li').click(

    function(){

      $(this).children('.dropdown_menu').slideToggle();

    }

  )

  // at_mouse_enter
  $('.right_nav_ul li').mouseenter(

    function(){

      $(this).children('.dropdown_menu').show();

    }

  )

  // at_mouse_leave
  $('.right_nav_ul li').mouseleave(

    function(){

      $(this).children('.dropdown_menu').hide();

    }

  )

});
