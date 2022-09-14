$(document).ready( $(function(){
    var navbtn = $(' .navbar-toggler');
    var nav = $(' .navbarwrap');

    $(navbtn).click(function(){
    $(navbtn).toggleClass('active');
    })


    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 100 ) {
            nav.addClass('nav-colored');
            nav.addClass('padding-navbar');
            
            nav.removeClass('nav-transparent');
        }else{
            nav.removeClass('nav-colored').addClass('nav-transparent');
        }
    })
}))