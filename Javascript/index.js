let degrees = document.querySelector('[data-degrees]').value
// let fahrenheit = document.querySelector('[data-fahrenheit]').value
let display = document.querySelector('[data-answer]')
let button = document.querySelector('[data-calculate]')
button.addEventListener('click', calculate)

function calculate(){
    let degrees = document.querySelector('[data-degrees]').value
    // let fahrenheit = document.querySelector('[data-fahrenheit]').value
    let answer = (degrees * 9/5) + 32;
    console.log(answer)
    display.value = answer;
}