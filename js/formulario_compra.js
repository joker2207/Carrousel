document.addEventListener('DOMContentLoaded', function() {
    const formularioCompra = document.querySelector('#formulario-compra');
    const resumenCompra = document.querySelector('#resumen-compra');
    const nombreElemento = document.querySelector('#resumen-nombre');
    const apellidoElemento = document.querySelector('#resumen-apellido');
    const ciudadElemento = document.querySelector('#resumen-ciudad');
    const direccionElemento = document.querySelector('#resumen-direccion');
    const correoElemento = document.querySelector('#resumen-correo');
    const codigoPostalElemento = document.querySelector('#resumen-codigo-postal');
    const opcionPagoElemento = document.querySelector('#resumen-opcion-pago');
    const numeroTarjetaElemento = document.querySelector('#resumen-numero-tarjeta');
    const bancoPSEElemento = document.querySelector('#resumen-banco');
    const resumenCarrito = document.querySelector('#resumen-carrito');
    const totalElemento = document.querySelector('#resumen-total');
  
    formularioCompra.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Obtener los valores del formulario
      const nombre = formularioCompra.querySelector('#nombre').value;
      const apellido = formularioCompra.querySelector('#apellido').value;
      const ciudad = formularioCompra.querySelector('#ciudad').value;
      const direccion = formularioCompra.querySelector('#direccion').value;
      const correo = formularioCompra.querySelector('#correo').value;
      const codigoPostal = formularioCompra.querySelector('#codigo-postal').value;
      const opcionPago = formularioCompra.querySelector('input[name="opcion-pago"]:checked').value;
      const numeroTarjeta = formularioCompra.querySelector('#numero-tarjeta').value;
      const bancoPSE = formularioCompra.querySelector('input[name="banco"]:checked').value;
  
      // Mostrar el resumen de la compra
      nombreElemento.textContent = nombre;
      apellidoElemento.textContent = apellido;
      ciudadElemento.textContent = ciudad;
      direccionElemento.textContent = direccion;
      correoElemento.textContent = correo;
      codigoPostalElemento.textContent = codigoPostal;
      opcionPagoElemento.textContent = opcionPago;
  
      if (opcionPago === 'tarjeta-credito') {
        numeroTarjetaElemento.textContent = numeroTarjeta;
        numeroTarjetaElemento.classList.remove('hidden');
        bancoPSEElemento.classList.add('hidden');
      } else if (opcionPago === 'pse') {
        bancoPSEElemento.textContent = bancoPSE;
        bancoPSEElemento.classList.remove('hidden');
        numeroTarjetaElemento.classList.add('hidden');
      }
  
      const carritoItems = document.querySelectorAll('.cart-items li');
      resumenCarrito.innerHTML = '';
      carritoItems.forEach(function(item) {
        const itemName = item.querySelector('span:first-child').textContent;
        const itemPrice = item.querySelector('.price').textContent;
        const li = document.createElement('li');
        li.textContent = `${itemName} - ${itemPrice}`;
        resumenCarrito.appendChild(li);
      });
  
      const total = document.querySelector('.total-price').textContent;
      totalElemento.textContent = total;
  
      // Mostrar el resumen de la compra y ocultar el formulario
      formularioCompra.classList.add('hidden');
      resumenCompra.classList.remove('hidden');
    });
  });
  