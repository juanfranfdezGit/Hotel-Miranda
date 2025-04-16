export default function header() {

    if (window.innerWidth < 1000) return;

    const header = document.getElementsByClassName("header")[0]

    let scroll = 0;

    window.addEventListener("scroll", () => {
        scroll = window.scrollY;

        if (scroll > 50) {
            header.style.transform = 'translateY(-130px)'
        } else if (scroll < 50) {
            header.style.transform = 'translateY(0px)'
        }
    })

    header.addEventListener("mouseenter", () => {
        header.style.transform = 'translateY(0px)'
    })

    header.addEventListener("mouseleave", () => {
        if (window.scrollY > 50) {
            header.style.transform = 'translateY(-130px)';
        }
    })
    
}