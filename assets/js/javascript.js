$(function(){

//----START bestselling slider
    // $("#checkbox").change(function(){
        setInterval(function(){
            moveRight();
        },7000);
    // })



//get data for slide count ,width and height
var slideCount = $("#slider ul li").length;
var slideWidth = $("#slider ul li").width();
var slideHeight = $("#slider ul li").height();

//caluculate the ul width
var sliderUlWidth = slideCount * slideWidth;

// parent will automatically copy the dimension of the child (li)
// $("#slider").css({width:slideWidth*2, height:slideHeight});
$("#slider").css({width:slideWidth, height:slideHeight});

$("#slider ul").css({width:sliderUlWidth, marginLeft: -slideWidth, height:slideHeight});

$("#slider ul li").last().prependTo("#slider ul");
// Unary negation Unary plus

function moveLeft(){
    $("#slider ul").animate({
        left: +slideWidth
    },"slow",function(){
        $("#slider ul li").last().prependTo("#slider ul");
        $("#slider ul").css("left","0");
    });
}

function moveRight(){
    $("#slider ul").animate({
        left: -slideWidth
    },"slow",function(){
        $("#slider ul li").first().appendTo("#slider ul");
        $("#slider ul").css("left","0");
    });
}

$(".control_prev1").click(function(){
    moveLeft();
});

$(".control_next1").click(function(){
    moveRight();
});
//-----END bestselling slider




//----START blogslider
        setInterval(function(){
            moveRight2();
        },5000);

//get data for slide count ,width and height
var slideCount2 = $("#slider2 ul li").length;
var slideWidth2 = $("#slider2 ul li").width();
var slideHeight2 = $("#slider2 ul li").height();

//caluculate the ul width
var sliderUlWidth2 = slideCount2 * slideWidth2;

// parent will automatically copy the dimension of the child (li)
// $("#slider").css({width:slideWidth*2, height:slideHeight});
$("#slider2").css({width:slideWidth2, height:slideHeight2});

$("#slider2 ul").css({width:sliderUlWidth2, marginLeft: -slideWidth2, height:slideHeight2});

$("#slider2 ul li").last().prependTo("#slider2 ul");
// Unary negation Unary plus

function moveLeft2(){
    $("#slider2 ul").animate({
        left: +slideWidth2
    },"slow",function(){
        $("#slider2 ul li").last().prependTo("#slider2 ul");
        $("#slider2 ul").css("left","0");
    });
}

function moveRight2(){
    $("#slider2 ul").animate({
        left: -slideWidth2
    },"slow",function(){
        $("#slider2 ul li").first().appendTo("#slider2 ul");
        $("#slider2 ul").css("left","0");
    });
}

$(".control_prev2").click(function(){
    moveLeft2();
});

$(".control_next2").click(function(){
    moveRight2();
});
//-----END bestselling slider


$('#image-pickup').mouseenter(function(){
    displayIn();
})

//----START #peony
function displayIn(){
    $("#peony").fadeIn("slow");
    // alert("test");
}


});



