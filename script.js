const daysElement = document.querySelector(".days");
const hoursElement= document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading =document.querySelector(".heading");
const timerContainer = document.querySelector(".timerContainer"); 

// converting time in milliseconds
const second =1000,
    minute = second*60,
    hour = minute*60,
    day =hour*24;

const timerFunction=() =>{
    //generating current date in milliseconds
    let now = new Date(),
        dd=String(now.getDate()).padStart(2,"0"),
        mm=String(now.getMonth()+1).padStart(2,"0"),
        yyyy=now.getFullYear();
        now=`${mm}/${dd}/${yyyy}`;

        //taking target date from user
    const enteredDay=prompt("Enter Day").padStart(2,"0"),
        enteredMOnth=prompt("Enter Month").padStart(2,"0");
   
    let targetDate=`${enteredMOnth}/${enteredDay}/${yyyy}`;

    // checking if target date is for next year
    if(now>targetDate){
        targetDate=`${enteredMOnth}/${enteredDay}/${yyyy+1}`;
    }
    const intervalId= setInterval(()=>{
        //converting target date in milliseconds
        const timer = new Date(targetDate).getTime();
        //taking current date in milliseconds
        const today = new Date().getTime();

        const difference = timer - today;
        const leftDay = Math.floor(difference/day);
        const leftHour =Math.floor((difference%day)/hour);
        const leftMinutes =Math.floor((difference%hour)/minute);
        const leftSeconds= Math.floor((difference%minute)/second);
        
        daysElement.innerText= leftDay;
        hoursElement.innerText= leftHour;
        minutesElement.innerText= leftMinutes;
        secondsElement.innerText= leftSeconds;

        //stop setInterval after reaching the target time
        if(difference<0){
            timerContainer.style.display="none";
            heading.innerText="Time up";
            clearInterval(intervalId);
        }
        console.log(`${leftDay}:${leftHour}:${leftMinutes}:${leftSeconds}`);
    },0);
};
timerFunction();