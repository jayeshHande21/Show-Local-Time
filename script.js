const clock = document.querySelector("#clock");

setInterval(fento,1000)

function fento(){
    const date = new Date();

    clock.innerHTML = date.toLocaleTimeString()
};