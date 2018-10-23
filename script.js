document.body.addEventListener('keypress', (e)=> {
    console.log(e);
    let sound = document.querySelector('#audio');
    sound.currentTime = 0;
    switch(e.charCode)
    {
        case 113:   
            sound.src = 'sounds/boom.wav';
            sound.play();
            break;
        case 119:
            sound.src = 'sounds/clap.wav';
            sound.play();
            break;
        case 101:
            sound.src = 'sounds/hihat.wav';
            sound.play();
            break;
        case 114:
            sound.src = 'sounds/kick.wav';
            sound.play();
            break;
        case 97:   
            sound.src = 'sounds/my-man.mp3';
            sound.play();
            break;
        case 115:
            sound.src = 'sounds/openhat.wav';
            sound.play();
            break;
        case 100:
            sound.src = 'sounds/pickle_rick.mp3';
            sound.play();
            break;
        case 102:
            sound.src = 'sounds/ride.wav';
            sound.play();
            break;
        case 122:   
            sound.src = 'sounds/snap-yes_1.mp3';
            sound.play();
            break;
        case 120:
            sound.src = 'sounds/snare.wav';
            sound.play();
            break;
        case 99:
            sound.src = 'sounds/tink.wav';
            sound.play();
            break;
        case 118:
            sound.src = 'sounds/tom.wav';
            sound.play();
            break;
    }
})