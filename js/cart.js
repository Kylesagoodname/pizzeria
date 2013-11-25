//create a cart model as a simple object with
    //the properties we eventually need to post to
    //the server
    var cart = {
        name: null,
        address1: null,
        zip: null,
        phone: null,
        items: [] //empty array
    }; //cart data

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

    

    $('.place-order').click(function(){
        alert("this is working");
        //TODO: validate the cart to make sure all the required
        //properties have been filled out, and that the 
        //total order is greater than $20 (see homework 
        //instructions) 

        postCart(cart, $('.cart-form'));
    });

}); //doc ready



function removeItem() {

            //alert("alibababab");
            
            var idxToRemove = $('.remove-from-cart').attr('data-index');
            
            cart.items.splice(idxToRemove, 1);
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
    var total = 0;
    //for each item in the cart...
    for (idx = 0; idx < cart.items.length; ++idx) {
        item = cart.items[idx];
        instance = template.clone();
        
        instance.find('.name').html(item.name);
        instance.find('.price').html(item.price);
        
        instance.find('.remove-from-cart').attr('data-index', idx);
        instance.find('.remove-from-cart').attr('data-price', item.price);

        total = total + Number(item.price);
        instance.removeClass('template');
        container.append(instance[idx]);

        //TODO: code to render the cart item
    } //for each cart item
    
    $('.total').empty();
    $('.total').append("Total: $" + total);

    //TODO: code to render sub-total price of the cart
    //the tax amount (see instructions), 
    //and the grand total

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
