var modal = document.getElementById("myModal1");

var cart = document.getElementById("cart-icon");

cart.addEventListener("click", function(){
    openModal();
});

function openModal(){
    modal.style.display= "block";
}


var closebtn = document.getElementsByClassName("closebtn")[0];

    closebtn.addEventListener("click", function(){
        closeModal();
    });

    function closeModal(){
        modal.style.display= "none";
    }