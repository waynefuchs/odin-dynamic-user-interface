import "./style.css";

function clearClass(classText, except=null) {
  const allClicked = Array.from(document.querySelectorAll(`.${classText}`)).filter(element => element !== except);
  allClicked?.forEach(clicked => clicked.classList.remove(classText));
}

function addEventMouseEnter(li) {
  li.addEventListener('mouseenter', (event) => {
    clearClass('clicked', event.target);
    event.stopPropagation();
  });
}

function addEventMouseClick(li) {
  li.addEventListener("click", (event) => {
    const isClicked = event.target.classList.contains('clicked');
    clearClass('clicked');
    if (!isClicked)
      event.target.classList.add('clicked');
  });
}

function dropdown(element) {
  const dropdowns = Array.from(element.querySelectorAll(".drop-menu"));
  dropdowns.forEach((li) => {
    li.classList.add("processed");
    addEventMouseEnter(li);
    addEventMouseClick(li);
  });
}

dropdown(document.querySelector("nav>ul"));
