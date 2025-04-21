let lastScrollTop = 0; // Guarda la última posición de desplazamiento

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Desplazamiento hacia abajo
    document.querySelector('.navbar').classList.add('navbar-hidden');
  } else {
    // Desplazamiento hacia arriba
    document.querySelector('.navbar').classList.remove('navbar-hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Aseguramos que no sea negativo
});
