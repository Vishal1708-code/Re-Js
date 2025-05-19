let clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    if (clock) {
        clock.innerHTML = date.toLocaleString();
    }
}, 1000);
