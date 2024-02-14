window.addEventListener("scroll", function() {
    const header = document.querySelector(".header1");
    if(window.scrollY>50) {
        header.style.position='fixed';
        header.classList.add("active");
    }
    else if (this.screen.width < 950 && this.window.scrollY > 0) {
        header.style.position='fixed';
    }
    else {
        header.style.position='static';
        header.classList.remove("active");
    }

});




