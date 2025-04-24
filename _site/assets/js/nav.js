// Activar botón de navegación
const mainNav = document.querySelector("nav");
const mobileNavBtn = document.querySelector(".nav-btn.mobile");

mobileNavBtn.addEventListener("click", (e) => {
  if (mobileNavBtn.querySelector(".active")) { // Si está activo
    mobileNavBtn.querySelector(".nav-stack").classList.remove("active");
    mainNav.classList.remove("active");
  } else { // Si no está activo
    mobileNavBtn.querySelector(".nav-stack").classList.add("active");
    mainNav.classList.add("active");
  }
});

// Ocultar el menú al hacer clic en un enlace del menú
const mobileNavLinks = mainNav.querySelectorAll("li a");
for (let i = 0; i < mobileNavLinks.length; i++) {
  mobileNavLinks[i].addEventListener("click", (e) => {
    mobileNavBtn.querySelector(".nav-stack").classList.remove("active");
    mainNav.classList.remove("active");
  });
}
