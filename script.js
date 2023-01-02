//ADDD ELEMENTOS
let clock = document.querySelector('.digital')

document.querySelector('.hora').addEventListener('click', hora) //ADD EVENTOS
document.querySelector('.data').addEventListener('click', data) //ADD EVENTOS


//ADD FUNÇÕES
function updateClock() {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    clock.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`
}
setInterval(updateClock, 1000)

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}


function hora() {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    clock.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

}

function data() {
    let now = new Date()
    let d = now.getDate()
    let m = now.getMonth() + 1
    let a = '23'

    clock.innerHTML = `${d}/${m}/${a}`
}










