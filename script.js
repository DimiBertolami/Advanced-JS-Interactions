// i force my counter to be global.. it's on purpose! only god can judge me
counter = 0;

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

document.getElementById("modeSelect").addEventListener("click", function(){
    if (document.body.className === "darkMode"){
        document.body.setAttribute("class", "lightMode");
        console.log("flipping the switch!");
    } else {
        document.body.setAttribute("class", "darkMode");
        console.log("backflip!");
    }
});