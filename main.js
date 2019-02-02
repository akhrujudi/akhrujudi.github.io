let data = JSON.parse('{"titles": ["\u0642\u0627\u062f\u0631", "\u0646\u0634\u064a\u0637"], "ansone": ["able", "active"], "anstwo": ["adjective", "adjective"], "ansthr": ["an able man", "an active man"]}');
var n = 0;
var flipped = false;

var original = true;

var current = ["", "", "", ""];
function next() {
    if(document.getElementById("btn").checked){
        document.getElementById("btn").checked = false;
    }
    current = [data.titles[n], data.ansone[n], data.anstwo[n], data.ansthr[n]];
    if(n < data.titles.length-1) {n = n + 1;} else {n = 0;}
    window.setTimeout(window.load, 500);
}

function flip() {
    original = !original;
    load();
}

function load() {
    if(!original) {
        document.getElementById("back-a").innerHTML = current[0];
        document.getElementById("back-b").innerHTML = "";
        document.getElementById("back-c").innerHTML = "";
        document.getElementById("front-a").innerHTML = current[1];
        document.getElementById("front-b").innerHTML = current[2];
        document.getElementById("front-c").innerHTML = current[3];
    } else {
        document.getElementById("front-a").innerHTML = current[0];
        document.getElementById("front-b").innerHTML = "";
        document.getElementById("front-c").innerHTML = "";
        document.getElementById("back-a").innerHTML = current[1];
        document.getElementById("back-b").innerHTML = current[2];
        document.getElementById("back-c").innerHTML = current[3];
    }
}
