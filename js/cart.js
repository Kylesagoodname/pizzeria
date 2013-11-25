//create a cart model as a simple object with
    //the properties we eventually need to post to
    //the server
    var cart = {
        name: null,
        address1: null,
        address2: null,
        zip: null,
        phone: null,
        items: [] //empty array
    }; //cart data

    var total;
//doc ready function
$(function(){

    //click event handler for all buttons with the
    //style class 'add-to-cart'
    $('.add-to-cart, .add-to-cart-s, .add-to-cart-m, .add-to-cart-l').click(function(){
        
        //use the attributes on the button to construct
        //a new cart item object that we can add to the
        //cart's items array
        var newCartItem = {
            type: this.getAttribute('data-type'),
            name: this.getAttribute('data-name'),
            size: this.getAttribute('data-size'),
            price: this.getAttribute('data-price')
        };

        //push the new item on to the items array
        cart.items.push(newCartItem);
        
       
        //render the cart's contents to the element
        //we're using to contain the cart information
        //note that you would need a <div> or some
        //other grouping element on the page that has a
        //style class of 'cart-container'
        renderCart(cart, $('.template-cart'), $('.cart-container'));
    });

    
    //fills the cart with the information from the form
    $('.cartform').submit(function(){
        
        var signupForm = $(this);
        var addr1Input = signupForm.find('input[name="addr-1"]');
        var addr1Value = addr1Input.val();
        cart.address1 = addr1Value;
        var addr2Input = signupForm.find('input[name="addr-2"]');
        var addr2Value = addr2Input.val();
        cart.address2 = addr2Value;
        var nameInput = signupForm.find('input[name="first-name"]');
        var nameValue = nameInput.val();
        cart.name = nameValue;
        var zipInput = signupForm.find('input[name="zip"]');
        var zipValue = zipInput.val();
        cart.zip = zipValue;
        var phoneInput = signupForm.find('input[name="phone"]');
        var phoneValue = phoneInput.val();
        cart.phone = phoneValue;
        if(addr1Value && total > 20) {
            postCart(cart, $('.cartform'));
            return true;
        } else {
            alert("Please fill out all fields and order at least 20 dollars worth of food.")
            return false;
        }
         
    });

}); //doc ready


//removeItem()
//removes an item from the shopping cart
//rerenders the cart after removing
function removeItem() {
            
            var idxToRemove = $('.remove-from-cart').attr('data-index');
            
            cart.items.splice(idxToRemove, 1);
            renderCart(cart, $('.template-cart'), $('.cart-container'));
}

//startOver()
//lets the user clear shopping cart and input fields
//rerenders the cart 
function startOver() {
    cart = {
        name: null,
        address1: null,
        address2: null,
        zip: null,
        phone: null,
        items: [] //empty array
    }; //cart data

    renderCart(cart, $('.template-cart'), $('.cart-container'));
}

// renderCart()
// renders the current cart information to the screen
// parameters are:
//  - cart (object) reference to the cart model
//  - container (jQuery object) reference to the container <div>
//
function renderCart(cart, template, container) {
    var idx, item, instance;
    
    //empty the container of whatever is there currently
    container.empty();
    var subtotal = 0;
    total = 0;
    var tax = .095;
    //for each item in the cart...
    for (idx = 0; idx < cart.items.length; ++idx) {
        item = cart.items[idx];
        instance = template.clone();
        
        instance.find('.name').html(item.name);
        instance.find('.price').html(item.price);
        
        instance.find('.remove-from-cart').attr('data-index', idx);
        instance.find('.remove-from-cart').attr('data-price', item.price);

        subtotal = subtotal + Number(item.price);
        instance.removeClass('template');
        container.append(instance[idx]);

        
    } 
    tax = subtotal * tax;
    tax = Math.round(tax * 100) / 100;
    total = total + tax + subtotal;
    $('.subtotal').empty();
    $('.subtotal').append("Subtotal: $" + subtotal);
    $('.tax').empty();
    $('.tax').append("Tax: $" + tax);
    $('.total').empty();
    $('.total').append("Total: $" + total);

   

} //renderCart()

// postCart()
// posts the cart model to the server using
// the supplied HTML form
// parameters are:
//  - cart (object) reference to the cart model
//  - cartForm (jQuery object) reference to the HTML form
//
function postCart(cart, cartForm) {
    //find the input in the form that has the name of 'cart'    
    //and set it's value to a JSON representation of the cart model
    cartForm.find('input[name="cart"]').val(JSON.stringify(cart));

    //submit the form--this will navigate to an order confirmation page
    cartForm.submit();

} //postCart()
