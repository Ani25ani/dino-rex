let $dino = document.querySelector('.dino')
let $cactus = document.querySelector('.cactus')
let $result = document.querySelector("#result")
let $start = document.querySelector("#start")

let score = 0;

document.addEventListener('click', function(event){
    jump()
});


function jump (){
    if ($dino.classList != "jump"){
        $dino.classList.add("jump")
        score++
    }
    setTimeout(function(){
        $dino.classList.remove('jump')
    },300)
}

let is_alive = setInterval(function(){
    let dino_top = parseInt(window.getComputedStyle($dino).getPropertyValue("top"))
    let cactus_left = parseInt(window.getComputedStyle($cactus).getPropertyValue("left"))
    
    if (cactus_left < 30 && cactus_left > 0 && dino_top >= 150){
       alert(score)
    }
},10)