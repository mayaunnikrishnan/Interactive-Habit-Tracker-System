const habitNameInput = document.getElementById('habit-name-input');
const setHabitNameBtn = document.getElementById('set-habit-name');
const habitNameDisplay = document.getElementById('habit-name-display');

setHabitNameBtn.addEventListener('click',()=>{
    const habitName = habitNameInput.value .trim();
    if (habitName){
        habitNameDisplay.textContent=`Tracking : ${habitName}`;
        habitNameInput.value = "";
    }else{
        alert ('Please Enter your habit ....');
    }
});

const tracker= document.getElementById('tracker');
const dayInWeek = 7;

for (let i = 1; i <= dayInWeek; i++){ 
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    dayDiv.innerHTML = `
    <div class='toggle'></div>
    <span>Day ${i}</span>
    `;
    tracker.appendChild(dayDiv);
}

tracker.addEventListener('click',(e)=>{
    const target = e.target.closest('.day');
    if(target){
        target.classList.toggle('complete');
        target.querySelector('.toggle').classList.toggle('complete');
        updateProgress();
    }
})


const progressFill = document.getElementById('progress-fill');

function updateProgress(){
    const totalDays = document.querySelectorAll('.day').length;
    const completeDays = document.querySelectorAll('.day.complete').length;
    const progressPercentage =(completeDays/totalDays)*100;

    progressFill.style.width =`${progressPercentage}%`;
}