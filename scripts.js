const container = document.querySelector(".container")
for(let i = 0; i < 16 * 16; i++) {
    const child = document.createElement("div");
    child.classList.add("pixel");
    child.style.minHeight = "20px";
    child.style.minWidth = "20px";
    container.appendChild(child);
}