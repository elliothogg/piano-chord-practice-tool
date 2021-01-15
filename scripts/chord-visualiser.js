function displayChordText() {
    let key = document.querySelector('input[name = key]:checked').value;
    let chord = document.querySelector('input[name = chord]:checked').value;
    let arrangement = document.querySelector('input[name = arrangement]:checked').value;
    console.log(arrangement);
    document.getElementById('chords').value = key + chord;
    if (arrangement == "chordStructuresBothHands")
        displayChordOnKeyboard(chord, key, chordStructuresBothHands);
    else displayChordOnKeyboard(chord, key, chordStructuresLH);
};

function displayChordOnKeyboard(chordIn, keyIn, arrangement) {
    clearKeyboard();
    let chordStructure = arrangement[chordIn];
    let root;
    if (arrangement == chordStructuresBothHands)
        root = noteMidiDB[keyIn + 2]; //2 sets which octave chords root is in
    else root = noteMidiDB[keyIn + 3];
    let bottomNote = chordStructure[0] + root //the first element of the chord structure tells us if the bottom note is different to the root, if 0, then it isnt.
    console.log(root)
    console.log(bottomNote)
    document.getElementById("n" + (bottomNote)).style.backgroundColor='green';

    let nextNote = bottomNote + parseInt(chordStructure[1]);
    let i=2;
    while(i<=chordStructure.length){
        document.getElementById("n" + nextNote).style.backgroundColor='green';
        nextNote = nextNote + parseInt(chordStructure[i]);
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

console.log(chordStructuresBothHands["maj9"][0]);
