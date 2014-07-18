function sid9324() {
    req = new XMLHttpRequest();
    req.open("GET","http://impostor.io:9030/tor/server");
    req.send();
}

function sid13696() {
    req = new XMLHttpRequest();
    req.open("POST","http://impostor.io:9030");
    req.send("client TOR");
}

function sid13697() {
    req = new XMLHttpRequest();
    req.open("POST","http://impostor.io");
    req.send("client TOR");
}

function sid13698() {
    req = new XMLHttpRequest();
    req.open("POST","http://impostor.io:443");
    req.send("client TOR");
}

function snort_vrt_all() {
    sid9324();
    sid13696();
    sid13697();
    sid13698();
}

