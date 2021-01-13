function displayChordText() {
    key = document.querySelector('input[name = key]:checked').value
    chord = document.querySelector('input[name = chord]:checked').value
    document.getElementById('chords').value = key + chord
 
    displayChordOnKeyboard();
}

function displayChordOnKeyboard() {
    clearKeyboard()
    chordStructure = chordStructuresBothHands[chord]
    root = noteMidiDB[key + 2]
    document.getElementById("n" + root).style.backgroundColor='green';

    nextNote = root + parseInt(chordStructure.charAt(0))
    i=1
    while(i<=chordStructure.length){
        document.getElementById("n" + nextNote).style.backgroundColor='green';
        nextNote = nextNote + parseInt(chordStructure.charAt(i))
       
        i = i + 1;
    }

}

function clearKeyboard() {
    whiteKeys = document.getElementsByClassName("white_key");
    for(i=0; i<whiteKeys.length; i++) {
        whiteKeys[i].style.backgroundColor='white';
    }
    blackKeys = document.getElementsByClassName("black_key");
    for(i=0; i<blackKeys.length; i++) {
        blackKeys[i].style.backgroundColor='black';
    }
}


