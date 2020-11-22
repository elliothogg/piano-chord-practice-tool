function displayChords() {
    key = document.querySelector('input[name = key]:checked').value
    mode = document.querySelector('input[name = mode]:checked').value
    document.getElementById('chords').value = zipWith(keys[key], chords[mode])

}

let Eb = ["Eb","F","G","Ab","Bb","C","D"]

keys = {
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
    G: ["G","A","B","C","D","E","F#"],
    }

chords = {
    triads: ["","m","m","","","m","b5"],
    seventhChords: ["ma7","mi7","mi7","ma7","7","mi7","mi7b5"],
    jazzExtensions1: ["ma9","mi9","mi7","ma7","7(b9)","mi9","mi7b5"]
}




function zipWith(array1, array2) {
    const zippedArray = []

    for (i=0; i < array1.length; i++) {
        zippedArray[i] = array1[i].concat(array2[i])
    }
    return zippedArray
}


const EbTriads = zipWith(Eb,triads)

hello = document.getElementById("key")

console.log(EbTriads)
console.log(document.getElementsByName('key'))

