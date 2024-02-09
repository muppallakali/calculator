const display=document.getElementById("display")

function add(value){
    display.value+=value
}
function cleardisplay(){
    display.value="";
}
function caluculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="Error"
    }
       
}
