// const colors array
const colors = ['yellow', 'green', 'blue','#f15025', 'rgba(125,125,125,0.5)'];
// target the button
const btn = document.getElementById('btn');
// add event listener with an annonymous function
btn.addEventListener('click', function () {
    // create random 
let random = Math.floor(Math.random() * colors.length);
// select the body of the dom
const body = document.body;
body.style.backgroundColor = colors[random];

})
