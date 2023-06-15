// Obtener los elementos del carrito
var cartItems = document.querySelector('.cart-items');
var totalPrice = document.querySelector('.total-price');

// Variable para almacenar los productos seleccionados
var selectedItems = [];

// Agregar evento de clic a los botones "Agregar al carrito"
var addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', addToCart);
});

// Agregar producto al carrito
function addToCart(event) {
  var button = event.target;
  var item = button.parentElement;
  var itemName = item.querySelector('span').textContent;
  var itemPrice = parseInt(item.querySelector('.price').textContent.slice(1));
  var itemId = button.getAttribute('data-item');

  // Crear objeto para el producto seleccionado
  var selectedItem = {
    id: itemId,
    name: itemName,
    price: itemPrice
  };

  // Agregar el producto seleccionado al arreglo
  selectedItems.push(selectedItem);

  // Actualizar el carrito de compra
  renderCart();

  // Actualizar el precio total
  updateTotalPrice();
}

// Eliminar producto del carrito
function removeCartItem(event) {
  var buttonClicked = event.target;
  var listItem = buttonClicked.parentElement;
  var itemId = buttonClicked.getAttribute('data-item');

  // Remover el producto del arreglo
  selectedItems = selectedItems.filter(function(item) {
    return item.id !== itemId;
  });

  // Actualizar el carrito de compra
  renderCart();

  // Actualizar el precio total
  updateTotalPrice();
}

// Actualizar el carrito de compra
function renderCart() {
  // Limpiar el carrito de compra
  cartItems.innerHTML = '';

  // Renderizar los productos seleccionados en el carrito
  selectedItems.forEach(function(item) {
    // Crear elemento de lista para el producto
    var cartItem = document.createElement('li');
    cartItem.innerHTML = item.name + ' - $' + item.price;

    // Crear botón para eliminar el producto
    var removeButton = document.createElement('button');
    removeButton.innerText = 'Eliminar';
    removeButton.classList.add('remove-button');
    removeButton.setAttribute('data-item', item.id);
    removeButton.addEventListener('click', removeCartItem);

    cartItem.appendChild(removeButton);
    cartItems.appendChild(cartItem);
  });
}

// Actualizar el precio total
function updateTotalPrice() {
  var total = selectedItems.reduce(function(acc, item) {
    return acc + item.price;
  }, 0);

  totalPrice.textContent = 'Total: $' + total;
}

// Agregar evento de clic al botón "Realizar compra"
var checkoutButton = document.querySelector('.checkout-button');
checkoutButton.addEventListener('click', redirectToCheckout);

// Redirigir a la página de formulario de compra
function redirectToCheckout() {
  // Obtener el valor total de la compra
  var total = selectedItems.reduce(function(acc, item) {
    return acc + item.price;
  }, 0);

  // Redirigir a la página de formulario de compra con el valor total como parámetro GET
  window.location.href = 'formulario-compra.html?total=' + total;
}
