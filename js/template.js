//doc ready function
$(function(){
    render(com.dawgpizza.menu.pizzas, $('.template-pizza'), $('.pizzaz'));
    renderdrinks(com.dawgpizza.menu.drinks, $('.template-drinks'), $('.drinkz'));
    renderdessert(com.dawgpizza.menu.desserts, $('.template-dessert'), $('.dessertz'));
});


function render(pizzas, template, container) {
  var idx;
  var instance;
  var pizza;
  for (idx = 0; idx < com.dawgpizza.menu.pizzas.length; ++idx) {
      instance = template.clone();
      pizza = com.dawgpizza.menu.pizzas[idx];
      instance.find('.name').html(pizza.name); 
      instance.find('.d').html(pizza.description)
      instance.find('.price-small').html('Small: $' + pizza.prices[0]);  
      instance.find('.price-medium').html('Medium: $' + pizza.prices[1]);
      instance.find('.price-large').html('Large: $' + pizza.prices[2]);
      //instance.find('.add-to-cart').attr('data-type', pizza);
      instance.find('.add-to-cart-s').attr('data-name', pizza.name);
      instance.find('.add-to-cart-m').attr('data-name', pizza.name);
      instance.find('.add-to-cart-l').attr('data-name', pizza.name);

      instance.find('.add-to-cart-s').attr('data-price', pizza.prices[0]);
      instance.find('.add-to-cart-m').attr('data-price', pizza.prices[1]);
      instance.find('.add-to-cart-l').attr('data-price', pizza.prices[2]);
      


      

      instance.removeClass('template');
      container.append(instance);
  } 
}

function renderdrinks(drinks, template, container) {
  var idx;
  var instance;
  var drink;
  for (idx = 0; idx < com.dawgpizza.menu.drinks.length; ++idx) {
      instance = template.clone();
      drink = com.dawgpizza.menu.drinks[idx];
      instance.find('.name').html(drink.name); 
      instance.find('.price').html('$' + drink.price);
      
      instance.find('.add-to-cart').attr('data-name', drink.name);
      instance.find('.add-to-cart').attr('data-price', drink.price);

      instance.removeClass('template');
      container.append(instance);
    

  } 
}

function renderdessert(desserts, template, container) {
  var idx;
  var instance;
  var dessert;
  for (idx = 0; idx < com.dawgpizza.menu.desserts.length; ++idx) {
      instance = template.clone();
      dessert = com.dawgpizza.menu.desserts[idx];
      instance.find('.name').html(dessert.name); 
     
      instance.find('.price').html('$' + dessert.price);
      instance.find('.add-to-cart').attr('data-name', dessert.name);
      instance.find('.add-to-cart').attr('data-price', dessert.price);
      instance.removeClass('template');
      container.append(instance);
    

  } 
}