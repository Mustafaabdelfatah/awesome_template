/*global $ , document , window*/
$(document).ready(function(){
    
    $('i').click(function(){
        
        $(this).toggleClass('fa-bars fa-times')
        
        $('.sidebar').toggleClass('active')
        
    })
    
     $(window).scroll(function () {
        
        if ($(this).scrollTop() > 400) {
            $('.scroll-top').fadeIn(1000);
        } else {
            
            $('.scroll-top').fadeOut(500);
        }
    });
    
     // click on the buuton to go up
    
    $('.scroll-top').click(function () {
        
        $('html , body').animate({
            
            scrollTop : 0
            
        }, 1000);
    });    
    
    // smooth scroll
    
    $('ul li a , .find').click(function (e) {
        
        e.preventDefault();
        
        $('html , body').animate({
            
            scrollTop : $('.' + $(this).data('scroll')).offset().top -35 
            
        }, 1000);
    });
})