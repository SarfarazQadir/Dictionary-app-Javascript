var url="https://api.dictionaryapi.dev/api/v2/entries/en/";

var GetDict = () =>{
    var word=document.getElementById('inp').value;

    fetch(`${url}${word}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById('word').innerHTML=data[0].word;
        document.getElementById('pho').innerHTML=data[0].phonetic;
        document.getElementById('def').innerHTML=data[0].meanings[0].definitions[0].definition;
    })
}