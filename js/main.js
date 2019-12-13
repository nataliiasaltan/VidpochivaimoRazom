$(function() {
	drop();
    slickSlider();
});

function drop(){
    $(".item-inner").on('click', function(){
        var $this = $(this).parent();
        if ($this.hasClass('open')){
             $this.removeClass('open')
        } else{
            $this.addClass("open");
        }
    });
}

function slickSlider() {
    $('.slider-carosuel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,    
    });
}