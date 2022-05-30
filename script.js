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
async function getPokemon(q){
    // console.log(q.childNodes);
    // alert(q.childNodes[0].data);
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${q.childNodes[0].data}`);
    const pokemon = await data.json();
    // console.log(pokemon.sprites.front_default);
    window.open(pokemon.sprites.front_default, "some blabla", "width=100, height=100");

    return pokemon;
}



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