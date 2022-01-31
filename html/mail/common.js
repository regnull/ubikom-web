const TOKEN_NAME = "ubikom_token";
const LOGIN_URL = "https://alpha.ubikom.cc:8899/login";
const INBOX_URL = "https://alpha.ubikom.cc:8899/inbox";
const MESSAGE_URL = "https://alpha.ubikom.cc:8899/message";
const HTML_MESSAGE_URL = "https://alpha.ubikom.cc:8899/html-message";
const SEND_URL = "https://alpha.ubikom.cc:8899/send";
const DELETE_URL = "https://alpha.ubikom.cc:8899/delete";

function formatAddressShort(f) {
    if (f.Name != "") {
        return f.Name;
    }

    return f.Address;
}

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
