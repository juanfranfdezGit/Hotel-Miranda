export default function features() {
    const container = document.getElementsByClassName("features__items")[0]; 
    const items = container.children;  
    const indicators = document.querySelectorAll(".features__indicators__item"); 
    let startX = 0;
    let currentTranslate = 0;  
    let isDragging = false;

    const getTotalWidth = () => {
        let totalWidth = 0;
        Array.from(items).forEach(item => {
            totalWidth += item.offsetWidth;  
        });
        return totalWidth;
    };

    const containerWidth = container.offsetWidth; 
    const itemWidth = items[0].offsetWidth;
    const totalWidth = getTotalWidth(); 

    const maxTranslate = -(totalWidth - containerWidth);  
    const minTranslate = 0;  

    const limitTranslate = (value) => {
        return Math.max(Math.min(value, minTranslate), maxTranslate);  
    };

    const updateIndicator = () => {
        const index = Math.floor(Math.abs(currentTranslate) / itemWidth); 
        indicators.forEach((indicator, idx) => {
            if (idx === index) {
                indicator.classList.add("active");
            } else {
                indicator.classList.remove("active");
            }
        });
    };

    container.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        container.style.transition = "none";
    });

    container.addEventListener("touchmove", (e) => {
        if (!isDragging) return;

        const currentX = e.touches[0].clientX;
        const diffX = currentX - startX;

        currentTranslate += diffX;  
        currentTranslate = limitTranslate(currentTranslate);  

        container.style.transform = `translateX(${currentTranslate}px)`;  
        startX = currentX; 

        updateIndicator(); 
    });

    container.addEventListener("touchend", () => {
        isDragging = false;
        container.style.transition = "transform 0.3s ease";

        const closestItemIndex = Math.round(Math.abs(currentTranslate) / itemWidth);  
        currentTranslate = -closestItemIndex * itemWidth; 

        currentTranslate = limitTranslate(currentTranslate);  
        container.style.transform = `translateX(${currentTranslate}px)`; 

        updateIndicator(); 
    });
}