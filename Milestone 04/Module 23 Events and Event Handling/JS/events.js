console.log('Extarnal File');

function fillRed(){
    document.body.style.backgroundColor = 'red';
}

function fillGreen(){
    document.body.style.backgroundColor = 'green';
}


const btnMakeBlue = document.getElementById('btn-make-blue');
console.log(btnMakeBlue);

btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}


// With function name
const btnMakePurple = document.getElementById('btn-make-purple')

btnMakePurple.onclick = makePurple; // ==> with function name, not function call ,,, makePurple() use korle abr function call hoiye jabe

function makePurple(){
    document.body.style.backgroundColor = 'purple'
}


// .addEventListener('click', function(){})
document.getElementById('btn-make-gold').addEventListener('click', function(){
    document.body.style.backgroundColor = 'gold'
})

document.getElementById('btn-make-black').addEventListener('click', function(){
    document.body.style.backgroundColor = 'black'
})
document.getElementById('btn-make-white').addEventListener('click', function(){
    document.body.style.backgroundColor = 'white'
})