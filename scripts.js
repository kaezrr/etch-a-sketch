const MAX_SIZE = 480
const DEFAULT_SIZE = 16;

const btn = document.querySelector("button");
const inp = document.querySelector("input");
const container = document.querySelector(".container")

function get_random_int() {
    return Math.floor(Math.random() * 255);
}

function get_random_color() {
    return `rgb(${get_random_int()}, ${get_random_int()}, ${get_random_int()})`;
}

function set_grid(size) {
    let arrayOfNewChildren = [];
    for (let i = 0; i < size * size; i++) {
        const child = document.createElement("div");
        child.classList.add("pixel");
        child.style.minWidth = `${MAX_SIZE / size}px` 
        child.style.minHeight = `${MAX_SIZE / size}px` 
        arrayOfNewChildren.push(child);
    }
    container.replaceChildren(...arrayOfNewChildren);
}

function change_size(event) {
    let new_size = parseInt(inp.value, 10);
    if(isNaN(new_size)) new_size = DEFAULT_SIZE;
    console.log(new_size);
    // Limit new_size between 1 - 100 (inclusive)
    new_size = Math.min(new_size, 100);
    new_size = Math.max(new_size, 1);
    set_grid(new_size);
    inp.value = "";
    inp.placeholder = `${new_size}`;
};

btn.addEventListener("click", change_size);
inp.addEventListener("keypress", (e) => {
    if(e.key !== 'Enter') return;
    change_size();  
});

container.addEventListener("mouseover", (event) => {
    const target = event.target;
    switch(target.className) {
        case "pixel":
            target.className = "drawn";
            target.style.backgroundColor = get_random_color();
            target.style.opacity = "0.1";
            return;
        case "drawn":
            target.style.opacity = `${Math.min(1, parseFloat(target.style.opacity) + 0.1)}`;
            return;
    }
});

set_grid(DEFAULT_SIZE);