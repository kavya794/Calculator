let currentValue = '';
function update(id1){
    currentValue = currentValue + document.getElementById(id1).innerHTML;
    document.getElementById("input-container").value = currentValue;
}
function result(){
    document.getElementById("input-container").value = eval(currentValue);
}
function eraser(){
    currentValue = '';
    document.getElementById("input-container").value = currentValue;
}