let isAppRunning = false;

function startApp() {
    if (!isAppRunning)
    {
    isAppRunning = true;
    returnRandomChord();
    start = setInterval(returnRandomChord, getSpeed());
    };
}


function changeSpeed() {
    if (isAppRunning) {
        stopApp();
        startApp();
    };
};

function stopApp() {
    clearInterval(start);
    document.getElementById('chords').value = "";
    isAppRunning = false;
}

function returnRandomChord() {
    let chordList = returnChordList();
    let randomChord = randomElementSelector(chordList);
    document.getElementById('chords').value = randomChord;
}

const Eb = ["Eb","F","G","Ab","Bb","C","D"];

const keys = {
    C: ["C","D","E","F","G","A","B"],
    F: ["F","G","A","Bb","C","D","E"],
    Bb: ["Bb","C","D","Eb","F","G","A"],
    Eb: ["Eb","F","G","Ab","Bb","C","D"],
    Ab: ["Ab","Bb","C","Db","Eb","F","G"],
    Db: ["Db","Eb","F","Gb","Ab","Bb","C"],
    Gb: ["Gb","Ab","Bb","Cb","Db","Eb","F"],
    B: ["B","C#","D#","E","F#","G#","A#"],
    E: ["E","F#","G#","A","B","C#","D#"],
    A: ["A","B","C#","D","E","F#","G#"],
    D: ["D","E","F#","G","A","B","C#"],
    G: ["G","A","B","C","D","E","F#"]
};

const chords = {
    triads: ["","m","m","","","m","b5"],
    seventhChords: ["ma7","mi7","mi7","ma7","7","mi7","mi7b5"],
    jazzExtensions1: ["ma9","mi9","mi7","ma7","7(b9)","mi9","mi7b5"]
}

randomElementSelector = (array) =>
array[Math.floor((Math.random() * array.length) + 0)];

function returnChordList() {
    let key = document.querySelector('input[name = key]:checked').value;
    let mode = document.querySelector('input[name = mode]:checked').value;
    return zipWith(keys[key], chords[mode]);
}

function zipWith(array1, array2) {
    let zippedArray = [];
    for (i=0; i < array1.length; i++) {
        zippedArray[i] = array1[i].concat(array2[i]);
    }
    return zippedArray;
}

function getSpeed(){
    let speed = parseInt(document.querySelector('input[id = speed]').value);
    let msSpeed = (11 - speed) * 700;
    return msSpeed;
}
