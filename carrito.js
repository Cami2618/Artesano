document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.btn-add-carrito');

  botones.forEach(boton => {
    boton.addEventListener('click', function () {
      const nombre = this.getAttribute('data-nombre');
      const precio = parseInt(this.getAttribute('data-precio'));
      const img = this.getAttribute('data-img');

      // Buscar el selector de talla dentro del mismo card
      const card = this.closest('.card');
      const tallaSelector = card.querySelector('.talla-selector');
      const talla = tallaSelector ? tallaSelector.value : 'Única';

      const producto = { nombre, precio, talla, img };

      let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      carrito.push(producto);
      localStorage.setItem('carrito', JSON.stringify(carrito));

      alert(`🛒 Añadido al carrito:\n${nombre} - Talla ${talla}`);
    });
  });
});
