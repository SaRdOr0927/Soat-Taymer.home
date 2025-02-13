// let i = 1;
// function rec() {
//     console.log(i++)
//     if (i <= 10) {
//         setTimeout(() => {
//             rec();
//         },1000);
//     }
// }
// rec()

// // vaqt bilan ishlash

// let date = new Date();
// console.log(date)

// let day = new Date().getDate()
// console.log(day)
// console.log(date.getDay())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getMilliseconds())


const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const h = document.querySelector('.h')
const m = document.querySelector('.m')
const s = document.querySelector('.s')



function clock() {

    let time = new Date();
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()

    hours.innerHTML = hour
    minutes.innerHTML = min

    if (min < 10){
        minutes.innerHTML = "0" + min
    }
    if (hour < 10){
        hours.innerHTML = "0" + hour
    }

    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`

    setTimeout(() => {
        clock();
    },1000);
}
clock()


let link = document.querySelectorAll('.tabsItem')
let taymer1 = document.querySelector('.clock')
let taymer2 = document.querySelector('.stopwatch')

let chas = document.querySelector('#h')
let sekut = document.querySelector('#s')
let soat = document.querySelector('#soat')
let sekunt_2 = document.querySelector('#sekunt_2')

chas.addEventListener('click',function(){
    chas.classList.add("active");  
    sekut.classList.remove("active");
    soat.classList.add("active"); 
    sekunt_2.classList.remove("active"); 

})
sekut.addEventListener('click',function(){
    sekut.classList.add("active");  
    chas.classList.remove("active");
    sekunt_2.classList.add("active"); 
    soat.classList.remove("active"); 

})


    let startBtn = document.querySelector(".stopwatch__btn"); 
    let hours1 = document.querySelector(".stopwatch__hours");
    let minutes1 = document.querySelector(".stopwatch__minutes");
    let seconds1 = document.querySelector(".stopwatch__seconds");


document.addEventListener("DOMContentLoaded", function () {
    
    let interval;
    let seconds2 = 0;
    let minutes2 = 0;
    let hours2 = 0;
    let isRunning = false; 

    
    startBtn.addEventListener("click", function () {
        if (!isRunning) {
            isRunning = true;
            interval = setInterval(updateTime, 1000);
        }
    });

    function updateTime() {
        seconds2++;
        if (seconds2 === 60) {
            seconds2 = 0;
            minutes2++;
        }
        if (minutes2 === 60) {
            minutes2 = 0;
            hours2++;
        }

        hours1.textContent = hours2;
        minutes1.textContent = minutes2;
        seconds1.textContent = seconds2;
    }
});
