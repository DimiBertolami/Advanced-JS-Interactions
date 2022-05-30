Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


let a = new FgGallery('.fg-gallery', {
    cols: 4,
    style: {
        border: '10px solid #fff',
        height: '180px',
        borderRadius: '5px',
        boxShadow: '0 2px 10px -5px #858585',
    }
})

new FgSlider('slider-example', {
    autoplay: true, // autoplay on / off
    effect: 'slide', // fade, scale, slide, slide-top
    duration: 1000, // duration till the next slide
    bullets: true, // show / hide bullets
});