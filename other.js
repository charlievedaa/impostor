function useragent() {
    req = new XMLHttpRequest();
    req.open("POST","http://impostor.io");
    req.setRequestHeader("Agent", "Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0");
    req.send("User-Agent: Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0");
}

function other_all() {
    useragent();
}

