function menu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

window.addEventListener('load', (event)=> {
    const lu = document.querySelector("#lastupdated");
    lu.textContent = document.lastModified;

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();
})