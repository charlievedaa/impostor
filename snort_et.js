function sid2014939() {
    req = new XMLHttpRequest();
    req.open("GET","http://impostor.onion");
    req.send();
}

function sid2014941() {
    req = new XMLHttpRequest();
    req.open("GET","http://impostor.exit");
    req.send();
}

function sid2520000() {
    req = new XMLHttpRequest();
    req.open("GET","http://relay.impostor.io/bounce.py");
    req.send();
}

function sid2520001() {
    req = new XMLHttpRequest();
    req.open("GET","http://0x00.lame-delegation.net");
    req.send();
}

function snort_et_all() {
    sid2014939();
    sid2014941();
    sid2520000();
    sid2520001();
}

