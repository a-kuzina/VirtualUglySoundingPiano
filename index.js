let letters = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU'];
let keys = document.getElementsByClassName("key");


let sounds = [];
for (let i = 0; i < letters.length; i++){
    sounds[i] = new Audio("sounds/"+letters[i].slice(3)+".mp3");
}

document.addEventListener("keydown", function (event){

    if(letters.includes(event.code)){
        let position = letters.indexOf(event.code);
        sounds[position].play();
    }
    else{
        console.log("You pressed something wrong!", event.key+"!");
    }

});