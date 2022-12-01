function number2 (num1) {
    console.log(num1)
    var new1 = document.getElementById("input1");
    new1.value += num1;
}

function reuslt() {
    
    var new1 = document.getElementById("input1");
    new1.value = ""
}

function getresult () {
    var new1 = document.getElementById("input1");
    new1.value = eval(new1.value)
}

function clear1() {

    var new1 = document.getElementById("input1");
    new1.value = a ;
}