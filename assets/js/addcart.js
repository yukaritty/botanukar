$(function(){
    var priceList = []; 
    var total = 0;
    var sum = 0;
    $(".fa-cart-plus").click(function(){
        // alert("test");
        // var item = $('.fa-cart-plus').val();
        sum +=  1;



        // if(sum.length > 0){
        //     var itemName = $(this).siblings('.item-name').text();
        //     $(".name-on-cart").text(itemName);
        //     console.log(itemName);
        //      var itemPrice = $(this).siblings('.price').text();
        //      $(".price-on-cart").text(itemPrice);
     
        //      $('ul').append("<li>"+itemName+"</li>");
        //      $('ul').append("<li>"+itemPrice+"</li>");
         

        // }else{
        //     alert('Your cart is nothing');        
        // }


        // $('.list').append('<li>'+sum+' <span>&times;</span></li>');
        // $('#inputItem').val('');
        // $(".list").find("span").click(function(){
        //     $(this).parent().remove();
        // });
        // $('#delete-btn').click(function(){
        //     $('.list').empty();
        //     alert('deleted list successfully');
        // });
        $("#item-nm").text(sum);
    
        
       var itemName = $(this).siblings('.item-name').text();
       $(".name-on-cart").text(itemName);
       console.log(itemName);
        var itemPrice = $(this).siblings('.price').text();
        var itemPrices = $(this).siblings('.price').next().val();
          priceList.push(itemPrices);

         
        
        $(".price-on-cart").text(itemPrice);

        $('.list-on-cart').append("<li>" +
                "<span>" +itemName+ "</span>"    
                +
                "<span>" +itemPrice+"</span>"
                +
                "</li>"
        );
    });

    // $('ul').append("<li>"+itemPrice+"</li>");

    // function calculatePrice(){
    //     for(var i = 0 ; i < priceList.length; i++){
    //         total += priceList[i];
    //     }

    //     console.log("total price :"+total);

    // }

    // $('#testing').click(function(){
    //     calculatePrice();
    // });

});