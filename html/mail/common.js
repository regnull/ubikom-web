const TOKEN_NAME = "ubikom_token";
const LOGIN_URL = "https://alpha.ubikom.cc:8899/login";
const INBOX_URL = "https://alpha.ubikom.cc:8899/inbox";
const MESSAGE_URL = "https://alpha.ubikom.cc:8899/message";
const SEND_URL = "https://alpha.ubikom.cc:8899/send";

function formatAddress(f) {
    if (f.Name == "") {
        return f.Address;
    }
    return f.Name + " (" + f.Address + ")";
}

function formatAddressList(l) {
    let r = "";
    for (let i = 0; i < l.length; i++) {
        let addr = l[i];
        if (r != "") {
            r += ", ";
        }
        r += formatAddress(addr)
    }
    return r
}
