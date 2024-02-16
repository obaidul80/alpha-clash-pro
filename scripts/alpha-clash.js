// function play(){
// //    step-1 : hide the home screen. to hide the screen add the class hidden to the home section  
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');
// // console.log(homeSection.classList)

// // show the play ground
// const playGrounSection = document.getElementById('play-ground');
// console.log(playGrounSection.classList)
// playGrounSection.classList.remove('hidden');

// }

function continueGame(){
//  step-1: generate a random alphabet
const alphabet = getARandomAlphabet();
console.log('Your random alphabet', alphabet);

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}