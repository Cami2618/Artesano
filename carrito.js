document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.btn-add-carrito');

  botones.forEach(boton => {
    boton.addEventListener('click', function () {
      const nombre = this.getAttribute('data-nombre');
      const precio = parseInt(this.getAttribute('data-precio'));
      const img = this.getAttribute('data-img');

      const card = this.closest('.card');

      // Detectar talla si existe
      const tallaSelector = card.querySelector('.talla-selector');
      const talla = tallaSelector ? tallaSelector.value : null;

      // Validar si el producto requiere talla
      if (tallaSelector && !talla) {
        alert('Por favor selecciona una talla antes de añadir al carrito.');
        return;
      }

      // Detectar cantidad si existe
      const cantidadInput = card.querySelector('.cantidad-input');
      const cantidad = cantidadInput ? parseInt(cantidadInput.value) || 1 : 1;

      // Crear objeto producto
      const producto = {
        nombre,
        precio,
        img,
        talla: talla || 'Única',
        cantidad
      };

      // Guardar en localStorage
      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carrito));

      // Mostrar confirmación
      alert(`🛒 Añadido al carrito:\n${nombre}\nTalla: ${producto.talla}\nCantidad: ${producto.cantidad}`);
    });
  });
});
