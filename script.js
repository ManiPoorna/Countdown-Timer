const start = document.getElementById("start-btn")
// console.log(start);
start.addEventListener("click",function(e){
    e.preventDefault();
    // console.log("Clicked");
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let seconds = document.getElementById("seconds").value;
    // console.log(hours*minutes*seconds);
    hours = Number(hours);
    minutes = Number(minutes);
    seconds = Number(seconds)+1;
    if(hours === ''){
        hours = 0;
    }
    if(minutes === ''){
        minutes = 0;
    }
    if(seconds === ''){
        seconds = 0;
    }
    if(hours == 0 && minutes == 0){
        setTimeout(() => {
            const timerCard = document.getElementById(`timer-input${count}`);
            timerCard.innerHTML = 
            `<div class="time-up" id="time-up">
                <div class="heading"><b>Timer is Up..!</b></div>
                <div class="stop-btn" >
                    <button id="stop-btn">Stop</button>
                </div>
            </div>`
        }, seconds*1000);
    }

    addToUi(hours,minutes,seconds);
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
})

//getting Timer Cards Container

const added = document.getElementById("added-timer");
added.className= "added-timers";
added.id= "added-timer";

// adding timer Card to UI
let count = 1;
function addToUi(hours,minutes,seconds){

    count++;

    // Checking 

    setInterval(() => {
        console.log(hours,minutes,seconds);
    }, 1000);

    // function to display minutes and hours

    function displayMinutes(){
        document.getElementById(`minutes${count}`).value = minutes;
        if(minutes === 59){
            hours--;
        }
        if(hours < 1){
            hours = 0;
        }
        document.getElementById(`hours${count}`).value = hours;
        if(minutes === -1){
            if(hours === 0){
                minutes = 0;
            }
            else{
                minutes = 59;
            }
        }
    }

    // function to display Seconds

    function displaySeconds(){
        
        seconds--;
        if(seconds === 0){
            minutes--;
            if(minutes == -1){
                minutes = 0 ;
            }
        }
        if(seconds === -1){
            seconds = 59;
        }
        document.getElementById(`seconds${count}`).value = seconds;
        if(hours==0 && minutes == 0 && seconds == 0){
            console.log("Timer Up");
            setTimeout(() => {
                const timerCard = document.getElementById(`timer-input${count}`);
                timerCard.innerHTML = 
                `<div class="time-up" id="time-up">
                    <div class="heading"><b>Timer is Up..!</b></div>
                    <div class="stop-btn" >
                        <button id="stop-btn">Stop</button>
                    </div>
                </div>`

                const audio = document.getElementById('audio-play');
                console.log(audio);
                audio.play();

                clearInterval(displayMinutes);
                clearInterval(displaySeconds);
            }, 60000);
        }
    }
    

    setInterval(displayMinutes, 1000);
    setInterval(displaySeconds, 1000);

    //Timer Card 

    const timerCard = 
    `<div class="timer-input" id="timer-input${count}">
        <div class="timer-box">
            <div class="set-time"><p>Time Left : </p></div>
            <div class="inputs" id="inputs${count}">
                <form action="POST" id="form-inputs">
                    <div class="hours" >
                        <input type="text" id="hours${count}" placeholder="HH" value = 00 >
                    </div>
                    <div class="colon">:</div>
                    <div class="minutes" >
                        <input type="text" id="minutes${count}" placeholder="MM" value = 00>
                    </div>
                    <div class="colon">:</div>
                    <div class="seconds" >
                        <input type="text" id="seconds${count}" placeholder="SS" value = 00>
                    </div>
                </form>
            </div>
            <div class="set-btn">
                <button id="start-btn">Delete</button>
            </div>
        </div>
    </div>`

    // adding Timer Card
added.innerHTML += timerCard;
}