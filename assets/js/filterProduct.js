$(function(){

    $(".all").click(function(){
        $("*").show("slow");
    });
    $(".tonner-btn").click(function(){
        $(".tonner").show("slow");
        $(".serum, .facecream, .bathsalt, .aromaoil").hide("slow");
        // alert("Tonner btn Works");
        // $("#item1").hide("slow");
    });
    $(".serum-btn").click(function(){
        $(".serum").show("slow");
        $(".tonner, .facecream, .bathsalt, .aromaoil").hide("slow");
    });
    
    $(".facecream-btn").click(function(){
        $(".facecream").show("slow");
        $(".tonner, .serum, .bathsalt, .aromaoil").hide("slow");
    });
    
    $(".bathsalt-btn").click(function(){
        $(".bathsalt").show("slow");
        $(".tonner, .serum, .facecream, .aromaoil").hide("slow");
    });
    $(".aromaoil-btn").click(function(){
        $(".aromaoil").show("slow");
        $(".tonner, .serum, .facecream, .bathsalt").hide("slow");
    });    
});
    