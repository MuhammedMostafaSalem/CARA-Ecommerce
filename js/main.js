// Icon bar in navbar
function openBar(){
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');
    bar.classList.toggle('active');
    close.classList.remove('active');
    nav.classList.toggle('active');
};
// ----------------------    Or make how this   ---------------------------------
            /*const bar = document.getElementById('bar');
            const close = document.getElementById('close');
            const nav = document.getElementById('navbar');

            if (bar) {
                bar.addEventListener('click' , function() {
                    nav.classList.add('active');
                })
            }
            if (close) {
                close.addEventListener('click' , function() {
                    nav.classList.remove('active');
                })
            } */

// ------------------------------------------------------------------------------------------------------


/* -----------------     shop gallery    ------------------*/
let mainImg = document.getElementById("mainImg");
function choose(links) {
    mainImg.src = links;
}

//----- Or 
/*let mainImg = document.getElementById("mainImg");
let smallImg = document.getElementById("smallImg");

smallImg[0].onclick = function() {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function() {
    mainImg.src = smallImg[3].src;
}*/


// ------------------------------------------------------------------------------------------------------




/* -----------------     shopping cart    ------------------*/
// var removeCartItemIcons = document.getElementsByClassName('fa-circle-xmark')
// console.log('removeCartItemIcons')
// for (var i = 0; i < removeCartItemIcons.length; i++) {
//     var button = removeCartItemIcons[i]
//     button.addEventListener("click" , function(event) {
//         var buttonClicked = event.target
//         buttonClicked.parentElement.parentElement.remove()
//     })
// }


// cart working js
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}
// making function
function ready(){
    var removeCartIcons = document.getElementsByClassName('fa-circle-xmark');
    console.log(removeCartIcons);
    for (var i = 0; i < removeCartIcons.length; i++){
        var button = removeCartIcons[i];
        button.addEventListener('click' , removeCartItem);
    }
}
// remove item from cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    // updateTotal();
}


let quantity = document.querySelector('.cartQuantity');
quantity.addEventListener('change',gettotal);
function gettotal(){
    this.parentElement.nextElementSibling.textContent = '$ '+ (this.value * 118.19);
}

// update total
// function updateTotal(){
//     let cartContant = document.getElementById('cart')[0];
//     let cartBoxes = cartContant.getElementsByClassName('cartBox');
//     let total = 0;
//     for (var i = 0; i < cartBoxes.length; i++){
//         let cartBox = cartBoxes[i];
//         let priceElement = cartBox.getElementsByClassName('cartPrice')[0];
//         let quantityElement = cartBox.getElementsByClassName('cartQuantity')[0];
//         let price = parseFloat(priceElement.innerText.replace('$', ''));
//         let quantity = quantityElement.value;
//         total = total + (price * quantity);

        
//     }
// }


