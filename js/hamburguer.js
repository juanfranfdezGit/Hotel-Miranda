export default function hamburguer() {
    const hamb = document.getElementById("hamburguerMenu");
    const overlay = document.getElementById("overlay");
    const bars = document.getElementsByClassName("header__nav__hamburguer__bar");

    hamb.addEventListener("click", () => {
        if (overlay.className === "overlay") {
            overlay.className = "overlay display";

            Array.from(bars).forEach((element, index) => {
                element.className = `header__nav__hamburguer__bar bar0${index + 1}`;
            });

        } else if (overlay.className === "overlay display") {
            overlay.className = "overlay";

            Array.from(bars).forEach((element) => {
                element.className = "header__nav__hamburguer__bar";
            });
        }
    })

}