// Option Number Two - Add Onclick Function On The HTML Element
// We Will Use This Maximum Time
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}
// Option Number Three
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.onclick = makeGreen;
    function makeGreen(){
        document.body.style.backgroundColor = 'green';
    }
// Option Number Three Another
const makeCrimsonButton = document.getElementById('make-crimson');
makeCrimsonButton.onclick = function makeCrimson(){
    document.body.style.backgroundColor = 'crimson';
}
// Option Number Four
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);
function makePink(){
    document.body.style.backgroundColor = 'pink';
}
// Option Number Five
const makeBlackButton = document.getElementById('make-black');
makeBlackButton.addEventListener('click', function makeBlack(){
    document.body.style.backgroundColor = 'black';
})
// Option Number Five - Final
// We Will Use This Maximum Time
document.getElementById('make-orange').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
}) 