function updateWelcomeMessage() {
    const currentTime = getDate();
    const hours = currentTime.getHours();

    let message = '';
    if (hours >= 5 && hours < 11) {
        message = 'GOOD MORNING NEPTUNE! HAVE A GREAT DAY!';
    } 
    else if (hours >= 11 && hours < 13) {
        message = 'READY FOR LUNCH NEPTUNE? HOW ABOUT HAVE A MILKTEA!';
    }
    else if (hours >= 13 && hours < 18) {
        message = 'GOOD AFTERNOON NEP! HOPE YOU ALL THE BEST!';
    } 
    else if (hours >= 18 && hours < 24) {
        message = 'GOOD EVERNING NEPTUNE,DONT FORGET TAKE SOME REST!';
    } 
    else {
        message = 'THE NIGHT IS DEEP...';
    }

    document.getElementById('index-statBar-welcome').innerText = message;
}

setInterval(updateWelcomeMessage, 10 * 60 * 1000);
updateWelcomeMessage();