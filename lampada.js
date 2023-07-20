
//variaveis
const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')
//funcoes
function lampOn () {
    if ( !isLampBroken ()) {
          lamp.src= 'lampacesa.png'
    }
  

}

function lampOff () {
    if (!isLampBroken ()) {
         lamp.src= 'lampapagada.png'
    }
   
}
function lampBroken () {
    lamp.src = 'lampquebrada.jpg'

}
function isLampBroken () {
    return lamp.src.indexOf ('quebrada') >-1
}

//chamada do evento
turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click',lampOff);
lamp.addEventListener('mouseover',lampOn)
lamp.addEventListener('mouseleave',lampOff)
lamp.addEventListener('dblclick',lampBroken)