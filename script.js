
// I force my counter to be global.. it's on purpose! only god can judge me
counter = 0;
// code was already here.. i'll use it later
Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

// gallery exercise 1 and 2
let a = new FgGallery('.fg-gallery', {
    cols: 4,
    style: {
        border: '10px solid #fff',
        height: '180px',
        borderRadius: '5px',
        boxShadow: '0 2px 10px -5px #858585',
    }
})

function getElementLeft(elm)
{
    var x = 0;

    //set x to elm’s offsetLeft
    x = elm.offsetLeft;

    //set elm to its offsetParent
    elm = elm.offsetParent;

    //use while loop to check if elm is null
    // if not then add current elm’s offsetLeft to x
    //offsetTop to y and set elm to its offsetParent

    while(elm != null)
    {
        x = parseInt(x) + parseInt(elm.offsetLeft);
        elm = elm.offsetParent;
    }
    return x;
}

function getElementTop(elm)
{
    var y = 0;

    //set x to elm’s offsetLeft
    y = elm.offsetTop;

    //set elm to its offsetParent
    elm = elm.offsetParent;

    //use while loop to check if elm is null
    // if not then add current elm’s offsetLeft to x
    //offsetTop to y and set elm to its offsetParent

    while(elm != null)
    {
        y = parseInt(y) + parseInt(elm.offsetTop);
        elm = elm.offsetParent;
    }

    return y;
}

function Large(obj)
{
    var imgbox=document.getElementById("imgbox");
    imgbox.style.visibility='visible';
    var img = document.createElement("img");
    img.src=obj.src;
    img.style.width='200px';
    img.style.height='200px';

    if(img.addEventListener){
        img.addEventListener('mouseout',Out,false);
    } else {
        img.attachEvent('onmouseout',Out);
    }
    imgbox.innerHTML='';
    imgbox.appendChild(img);
    imgbox.style.left=(getElementLeft(obj)-50) +'px';
    imgbox.style.top=(getElementTop(obj)-50) + 'px';
}

function Out()
{
    document.getElementById("imgbox").style.visibility='hidden';
}

// exercise 3 get pokemon starts here
async function getPokemon(q){
    // console.log(q.childNodes);
    // alert(q.childNodes[0].data);
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${q.childNodes[0].data}`);
    const pokemon = await data.json();
    // console.log(pokemon.sprites.front_default);
    window.open(pokemon.sprites.front_default, "some blabla", "width=100, height=100");

    return pokemon;
}


// darkmode exercise solved!
document.getElementById("modeSelect").addEventListener("click", function(){
    if (document.body.className === "darkMode"){
        document.body.setAttribute("class", "lightMode");
        document.title = "LightMode!"
        console.log("flipping the switch!");
    } else {
        document.body.setAttribute("class", "darkMode");
        document.title = "darkMode!"
        console.log("backflip!");
    }
});

// red dot driving me nuts, but thanks to Tim's watch i understand things better
const tic = 100;
const mouse = {
    x: 0,
    y: 0
}
const chaserBoxDiv = document.getElementsByClassName('chaserBox')[0];
const chaserBox = {
    div: chaserBoxDiv,
    left: chaserBoxDiv.getBoundingClientRect().left,
    top: chaserBoxDiv.getBoundingClientRect().top,
    right: chaserBoxDiv.getBoundingClientRect().right,
    bottom: chaserBoxDiv.getBoundingClientRect().bottom,
}
const chaser = {
    x: 0,
    y: 0,
    div: document.getElementsByClassName('chaser')[0],
}
document.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
})
function updateChaser(){
    updateChaserBox();
    console.log(`chaserbox left: ${chaserBox.left}`);
    console.log(`chaserbox top: ${chaserBox.top}`);
    if(insideChaserBox()){
        console.log(`scrollY: ${window.scrollY}`);
        console.log(`X: ${chaser.x} or ${mouse.x}!`);
        // chaser.div.style.left = mouse.x+'px'
        // }
        // if (mouse.x>130 || mouse.x<1300){
        //     return;
        // } else {
            chaser.x = mouse.x+'px';
            chaser.y = mouse.y+window.scrollY+'px';
        // }
    }
}
function updateChaserBox(){
    chaserBox.left = chaserBoxDiv.getBoundingClientRect().left;
    chaserBox.right = chaserBoxDiv.getBoundingClientRect().right;
    chaserBox.top = chaserBoxDiv.getBoundingClientRect().top;
    chaserBox.bottom = chaserBoxDiv.getBoundingClientRect().bottom;
    console.log(chaserBox);
}
function insideChaserBox(){

    return true;
}
function displayChaser(){
    chaser.div.style.top = chaser.y+'px';
    // if (mouse.x>1600){
    //     chaser.div.style.left = mouse.x+'px'
    // }

    // if (mouse.x>375){
        chaser.div.style.left = chaser.x+'px'
    // }
    // chaser.div.style.left = mouse.x+375+'px';
}
function game(){
    updateChaser();
    displayChaser();
    setTimeout(game, tic)
}
game();
// document.addEventListener('DOMContentLoaded', () => {
//     let mousePosX = 0,
//         mousePosY = 0,
//         mouseCircle = document.getElementById('chaser');
//
//     document.onmousemove = (e) => {
//         mousePosX = e.pageX;
//         // mousePosX = e.offsetX;
//         mousePosY = e.pageY;
//         // mousePosY = e.offsetY;
//     }
//
//     let delay = 6,
//         revisedMousePosX = 0,
//         revisedMousePosY = 0;
//
//     function delayMouseFollow() {
//         requestAnimationFrame(delayMouseFollow);
//
//         revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
//         revisedMousePosY += (mousePosY - revisedMousePosY) / delay;
//
//         mouseCircle.style.top = revisedMousePosY + 'px';
//         mouseCircle.style.left = revisedMousePosX + 'px';
//     }
//     delayMouseFollow();
// });



