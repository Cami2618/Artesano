document.querySelectorAll('.btn-add-carrito').forEach(boton => {
  boton.addEventListener('click', function () {
    const nombre = this.getAttribute('data-nombre');
    const precio = parseInt(this.getAttribute('data-precio'));
    const talla = this.parentElement.querySelector('.talla-selector').value;

    const producto = { nombre, precio, talla };

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert(`Añadido al carrito: ${nombre} - Talla ${talla}`);
  });
});
