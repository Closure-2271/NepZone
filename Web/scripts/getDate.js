function getDate(){
    const time = new Date();
    return time
}

//if no date the date cant be used as value
function formateTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return `${hours}:${minutes}:${seconds}`;
    //${} variable
}
//global function
function getFormatedTime(){
    const currentTime = getDate();
    return getFormatedTime(currentTime);
}

//update time per sec
function updateTime(){
    const currentTime = getDate();
    const formattedTime = formateTime(currentTime);
    document.getElementById('clock').innerText = formattedTime;
}

setInterval(updateTime, 1000);
updateTime();