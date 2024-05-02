function bigger(){
    var text = document.getElementById("text");
    text.style.fontSize="24pt";

    alert("Hello, world!");
}

function fancy(event){
    var text = document.getElementById('text');
    alert("Changed");
    text.style.fontWeight = 'bold'
    text.style.color = 'Blue';
    text.style.textDecoration = 'underline';
    document.getElementById('boring').checked = false;
}

function boring(event){
    var text = document.getElementById('text');
    alert("Reverted");
    text.style.fontWeight = 'normal'
    text.style.color = 'Black';
    text.style.textDecoration = 'none';
    text.style.fontSize = '1em';
    document.getElementById('fancy').checked = false;
}

function moo(){
    text.style.textTransform="uppercase"
    let str=text.value.split(".");
    let str2=str.join(".Moo");
    text.value=str2;
}