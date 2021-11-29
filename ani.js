const red = document.querySelector(".b1")
const yellow = document.querySelector(".b2")
const green = document.querySelector(".b3")
const body = document.querySelector("body")
const button = document.querySelector(".change")


button.addEventListener("click", function(){
   body.classList.toggle("bodys")
   
})

function trafficLight(){
    setTimeout( () => {
        redLight()
    },0);
      setTimeout(function () {
          greenLight()
      }, 4000)
    setTimeout(function () {
        yellowLight()
    }, 7000)
  
}

function redLight(){
    red.classList.add("on")
    setTimeout( () => {
        red.classList.remove("on")
    },4000)
}

function yellowLight() {
    yellow.classList.add("on")
    setTimeout(function () {
        yellow.classList.remove("on")
    }, 2000)
}
function greenLight() {
    green.classList.add("on")
    setTimeout(function () {
        green.classList.remove("on")
    }, 3000)
}

setInterval(trafficLight, 9000);