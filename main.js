
document.getElementById("namebox").onchange = function() {myFunction("namebox","request1")};
document.getElementById("emailbox").onchange = function() {myFunction("emailbox","request2")};
document.getElementById("subjectbox").onchange = function() {myFunction("subjectbox","request3")};
document.getElementById("messbox").onchange = function() {myFunction("messbox","request4")};

function myFunction(boxid,requestnum) {
    var x = document.getElementById(boxid);
    if (x && x.value) {
        document.getElementById(requestnum).innerHTML = "";
    }
}