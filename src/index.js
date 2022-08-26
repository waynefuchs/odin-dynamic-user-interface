import "./style.css";

function clearClass(classText) {
  const dropdowns = Array.from(document.querySelectorAll(`.${classText}`));
  dropdowns.classList.remove(classText);
}

function dropdown(element) {
  const dropdowns = Array.from(element.querySelectorAll(".drop-menu"));
  dropdowns.forEach((li) => {
    li.classList.add("processed");
    li.addEventListener("click", (event) => {
      clearClass("clicked");
      event.target.classList.add("clicked");
    });
  });
}

dropdown(document.querySelector("nav>ul"));
console.log("MOO");
