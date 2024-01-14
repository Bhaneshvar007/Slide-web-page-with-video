let container = document.querySelector(".container");
let PageEl = document.querySelectorAll(".page");
let ExploreBtn = document.querySelectorAll(".ExploreBtn");

let Ind = 0;

PageEl[Ind].classList.add("active");
ExploreBtn.forEach(e => {

    e.addEventListener("click", () => {
        // if (PageEl.length - 1 === Ind) {
            // window.location.reload();
            // Ind = 0;
        // }

        // else {
            Ind = Ind + 1;
            // alert("");
        // }
        PageEl[Ind].classList.add("active");
        container.style.transform = `translateY(-${Ind * 35}%)`
    })
})

function pageRelode() {
    window.location.reload();
}

// Mouse Effact 
document.addEventListener("click", (event) => {
    const MouseX = event.clientX;
    const MouseY = event.clientY;

    let element = document.querySelector(".mouseEfact");
    let haftWidth = element.offsetWidth / 2;
    let haftHeight = element.offsetHeight / 2;

    let posX = MouseX - haftWidth;
    let posY = MouseY - haftHeight;

    element.style.transform = `translate(${posX}px , ${posY})px`
});