let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

// Update every second
setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours();
    min.innerHTML = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
}, 1000);