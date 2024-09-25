const MAX_SIZE = 480

let grid_size = 100;
let grid_area = grid_size * grid_size;

const container = document.querySelector(".container")
for(let i = 0; i < grid_area; i++) {
    const child = document.createElement("div");
    child.classList.add("pixel");
    child.style.minWidth = `${MAX_SIZE / grid_size}px` 
    child.style.minHeight = `${MAX_SIZE / grid_size}px` 
    container.appendChild(child);
}


container.addEventListener("mouseover", (event) => {
    const target = event.target;
    if(target.className !== "pixel") return;
    target.classList.add("drawn");
});