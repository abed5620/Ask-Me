const theWord = document.getElementById("theWord");
const theMeaning = document.getElementById("theMeaning");
const test = document.getElementById("test");
const bt1 = document.getElementById("bt1");
const bt2 = document.getElementById("bt2");
//const bt3 = document.getElementById("bt3");
const bt4 = document.getElementById("bt4");
const reload = document.getElementById("reload");




let word = [];
let meaning = [];


function addToList(){

    var inputElement = theWord;

    var inputValue1 = inputElement.value;

    
    var inputElement = theMeaning;

    var inputValue2 = inputElement.value;

    word.push(inputValue1);
    meaning.push(inputValue2);
    console.log(word, meaning)


}

function show(){
    bt1.style.display = "none";
    bt2.style.display = "inline-block";
    test.style.display = "inline-block"
    bt3.style.display = "inline-block";
    bt4.style.display = "inline-block";
    reload.style.display = "inline-block";



}

function hide(){
    bt1.style.display = "inline-block";
    bt2.style.display = "none";
    test.style.display = "none"
    bt3.style.display = "none";
    bt4.style.display = "none";
    reload.style.display = "none";


}



function cons(){

    x = document.getElementById("bt3").innerHTML;
    console.log(x);



}