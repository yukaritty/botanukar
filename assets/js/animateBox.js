$(function(){

    $(".item-wrapper").mouseenter(function(){
        $("#animateBox1").animate({
            left:"0",
            opacity:1
        },2500
         ,function(){
            // next1();
        }
        );
        // alert("test");

    });

    $(".item-wrapper").mouseenter(function(){
        $("#animateBox2").animate({
            left:"0",
            opacity:1
        },2500
         ,function(){
        }
        );
    });
});
