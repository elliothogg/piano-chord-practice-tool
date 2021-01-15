function displayChordText() {
    let key = document.querySelector('input[name = key]:checked').value;
    let chord = document.querySelector('input[name = chord]:checked').value;
    document.getElementById('chords').value = key + chord;
    displayChordOnKeyboard(chord, key);
};

function displayChordOnKeyboard(chordIn, keyIn) {
    clearKeyboard();
    let chordStructure = chordStructuresBothHands[chordIn];
    let root = noteMidiDB[keyIn + 2];
    document.getElementById("n" + root).style.backgroundColor='green';

    let nextNote = root + parseInt(chordStructure.charAt(0));
    let i=1;
    while(i<=chordStructure.length){
        document.getElementById("n" + nextNote).style.backgroundColor='green';
        nextNote = nextNote + parseInt(chordStructure.charAt(i));
        i = i + 1;
    };

};

function clearKeyboard() {
    const whiteKeys = document.getElementsByClassName("white_key");
    for(i=0; i<whiteKeys.length; i++) {
        whiteKeys[i].style.backgroundColor='white';
    }
    const blackKeys = document.getElementsByClassName("black_key");
    for(i=0; i<blackKeys.length; i++) {
        blackKeys[i].style.backgroundColor='black';
    };
};


