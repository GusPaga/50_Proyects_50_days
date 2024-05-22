const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");

let currentActive = 1;

const upDate = () => {
  circles.forEach((circle, index) => {
    index < currentActive
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //  algoritmo para habilitar o deshabilitar los botones
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};

next.addEventListener("click", () => {
  currentActive++;
  // algoritmo para inhabilitar el boton next, cuando se llegue a el largo del array
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  upDate();
});

prev.addEventListener("click", () => {
  currentActive--;
  // algoritmo para inhabilitar el boton prev, cuando el valor de currentActive sea igual a 1, nunca será menor que 1 por eso no uso otras opciones.
  if (currentActive === 1) {
    currentActive = 1;
  }
  upDate();
});
