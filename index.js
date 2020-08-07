let minutesValue = 24;
let secondsValue = 59;
let set;
let clicks = false;
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const buttons = document.querySelectorAll('button');



function begin(){
        minutes.textContent = minutesValue;
        seconds.textContent = secondsValue;
        if(secondsValue>0 || minutesValue>0){
            if(secondsValue == 0 ){
                secondsValue = 60;
                minutesValue--;
            }
            if(secondsValue<10){
                secondsValue = "0"+secondsValue;
                seconds.textContent = secondsValue;
            }  
            secondsValue--;
        }
}

function start(){
    set = setInterval(begin,1000)
}

function pause(){
    clearInterval(set);
}
function reset(){
    clearInterval(set);
    minutes.textContent = "25";
    seconds.textContent = "00";
    minutesValue = 24;
    secondsValue = 59;
}

    buttons.forEach(element => {
        element.addEventListener('click',() =>{
            switch(element.className){
                case 'start':
                    start();
                    break; 
                case 'stop':
                    pause();
                    break;
                case 'reset':
                    reset()
                    break; 
            }
        })
    });