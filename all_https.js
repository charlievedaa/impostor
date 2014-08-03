
function sid2014939() {
    req = new XMLHttpRequest();
    req.open("GET","https://impostor.onion");
    req.send();
}

function sid2014941() {
    req = new XMLHttpRequest();
    req.open("GET","https://impostor.exit");
    req.send();
}

function sid2520000() {
    req = new XMLHttpRequest();
    req.open("GET","https://relay.impostor.io:8443/bounce.py");
    req.send();
}

function sid2520001() {
    req = new XMLHttpRequest();
    req.open("GET","https://0x00.lame-delegation.net");
    req.send();
}

function snort_et_all() {
    sid2014939();
    sid2014941();
    sid2520000();
    sid2520001();
}

function da1() {
    req = new XMLHttpRequest();
    req.open("GET","https://86.59.21.38");
    req.send();
}

function da2() {
    req = new XMLHttpRequest();
    req.open("GET","https://194.109.206.212");
    req.send();
}

function da3() {
    req = new XMLHttpRequest();
    req.open("GET","https://82.94.251.203");
    req.send();
}

function da4() {
    req = new XMLHttpRequest();
    req.open("GET","https://193.23.244.244");
    req.send();
}

function da5() {
    req = new XMLHttpRequest();
    req.open("GET","https://208.83.223.34");
    req.send();
}

function bro_all() {
    da1();
    da2();
    da3();
    da4();
    da5();
}

snort_et_all()
bro_all()

