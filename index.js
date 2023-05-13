
//Detecting button press

for (var i=0; i<document.querySelectorAll(".drum").length; i++) {
    
    var singleDrum = document.querySelectorAll(".drum")[i];
    singleDrum.addEventListener("click", function () {
    
        //var buttonInnerHtml = singleDrum.innerHTML; //doesnt work because already i = 7 so it will always call case("l")
        var buttonInnerHtml = this.innerHTML; //this is unique for each loop step (it creates a unique objects for each i during the loop)
        makeSound(buttonInnerHtml);
        console.log(this)
        buttonAnimation(buttonInnerHtml);

    });

}

//Detecting keyboard press

document.addEventListener("keypress", function(event) {
    var singleKey = event.key.toLowerCase();
    makeSound(singleKey);
    buttonAnimation(singleKey);
    });


//Sound function

function makeSound(key) {

    switch(key){
        case("w"):
            var audioTom1 = new Audio("./sounds/tom-1.mp3");
            audioTom1.play();
            break;
        case("a"):
            var audioTom2 = new Audio("./sounds/tom-2.mp3");
            audioTom2.play();
            break;
            case("s"):
            var audioTom3 = new Audio("./sounds/tom-3.mp3");
            audioTom3.play();
            break;
        case("d"):
            var audioTom4 = new Audio("./sounds/tom-4.mp3");
            audioTom4.play();
            break;
        case("j"):
            var audioSnare = new Audio("./sounds/snare.mp3");
            audioSnare.play();
            break;
        case ("k"):
            var audioCrash = new Audio("./sounds/crash.mp3");
            audioCrash.play();
            break;
        case("l"):
            var audioKick = new Audio("./sounds/kick-bass.mp3");
            audioKick.play();
            break;

    default: console.log(key);
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100);
}


//document.addEventListener("keypress", function(event) { //to present how keypress works
//    console.log(event);
//})


// var audioTom1 = new Audio('./sounds/tom-1.mp3');
//     audioTom1.play();

// console.log(buttonsObject);