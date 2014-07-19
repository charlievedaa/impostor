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

function useragent() {
    req = new XMLHttpRequest();
    req.open("POST","http://impostor.io");
    req.setRequestHeader("Agent", "Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0");
    req.send("User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0");
}

function other_all() {
    useragent();
}

snort_vrt_all()
snort_et_all()
bro_all()
other_all()

