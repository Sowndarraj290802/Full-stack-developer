function display(input){
    const display=document.getElementById("output");
    display.value+=input;
}
function clearDisplay(){
    const display=document.getElementById("output");
    display.value='';
}
function calculate(){
    try{
    var display=document.getElementById("output");
    display.value=eval(display.value);
    }
    catch{
    var display=document.getElementById("output");
    display.value="Error";
    }
}
function ClearLastElement(){
    var display=document.getElementById("output");
    display.value=display.value.slice(0,-1);
}