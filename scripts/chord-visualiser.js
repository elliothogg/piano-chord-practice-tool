function displayChordText() {
    key = document.querySelector('input[name = key]:checked').value
    chord = document.querySelector('input[name = chord]:checked').value
    document.getElementById('chords').value = key + chord
}

function test() {
    document.getElementById('chords').value = "HI JAZZ"
    note = 'Eb2';
    console.log(note)
    document.getElementById(note).style.backgroundColor='green';
}


