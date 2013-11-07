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
      instance.find('.prices').html('$' + pizza.prices[0] + '/' + '$' + pizza.prices[1] +'/' + '$' + pizza.prices[2]);
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
      instance.removeClass('template');
      container.append(instance);
    

  } 
}