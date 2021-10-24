
document.getElementById("namebox").onchange = function() {myFunction()};
function myFunction() {
    var x = document.getElementById("namebox");
    x.value = x.value.toUpperCase();
}