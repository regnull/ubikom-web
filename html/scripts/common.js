let nameRegistryContractAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"configName","type":"string"},{"indexed":false,"internalType":"string","name":"configValue","type":"string"}],"name":"ConfigUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"NameOwnershipUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NameRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"PublicKeyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"Sale","type":"event"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"bytes","name":"publicKey","type":"bytes"}],"name":"buyName","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"configName","type":"string"}],"name":"lookupConfig","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"lookupName","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"bytes","name":"publicKey","type":"bytes"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"publicKey","type":"bytes"},{"internalType":"string","name":"name","type":"string"}],"name":"registerName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"configName","type":"string"},{"internalType":"string","name":"configValue","type":"string"}],"name":"updateConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"updateOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"updatePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"publicKey","type":"bytes"},{"internalType":"string","name":"name","type":"string"}],"name":"updatePublicKey","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const useTestnet = false;
const infuraUrl = "https://mainnet.infura.io/v3/8f540714acb24862a8c9a5c3d8568f23";
const infuraTestUrl = "https://sepolia.infura.io/v3/8f540714acb24862a8c9a5c3d8568f23";
const nameRegistryContractAddress = "0xc44341402eff03307515043c920471ea67a2d9c3";
const nameRegistryTestContractAddress = "0xcc8650c9cd8d99b62375c22f270a803e7abf0de9";
const etherscanBaseTestUrl = "https://sepolia.etherscan.io";
const etherscanBaseUrl = "https://etherscan.io";
const dumpServerAddress = "alpha.ubikom.cc:8826";
const ubikomManagementServer = "https://alpha.ubikom.cc:8088";

function getInfuraUrl() {
    if (useTestnet) {
        return infuraTestUrl;
    }
    return infuraUrl;
}

function getContractAddress() {
    if (useTestnet) {
        return nameRegistryTestContractAddress;
    }
    return nameRegistryContractAddress;
}

function getNetworkName() {
    if (useTestnet) {
        return "Sepolia testnet";
    }
    return "ETH mainnet";
}

function usingTestnet() {
    return useTestnet;
}

function getEtherscanTransactionUrl(tx) {
    if (useTestnet) {
        return `${etherscanBaseTestUrl}/tx/${tx}`;
    }
    return `${etherscanBaseUrl}/tx/${tx}`
}

function getEtherscanAddressUrl(addr) {
    if (useTestnet) {
        return `${etherscanBaseTestUrl}/address/${addr}`;
    }
    return `${etherscanBaseUrl}/address/${addr}`
}

function getEtherscanBlockUrl(block) {
    if (useTestnet) {
        return `${etherscanBaseTestUrl}/block/${block}`;
    }
    return `${etherscanBaseUrl}/block/${block}`
}

const StatusType = {
    Info: '#30393f',
    Error: '#FF0000',
    Success: '##3ADF00',
}

function setStatus(msg, color) {
    let status = document.getElementById("status");
    status.innerHTML = msg;
    status.style.color = color;
}

function clearStatus() {
    document.getElementById("status").innerHTML = " ";
}

// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter, errMsg) {
    [ "input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout" ].forEach(function(event) {
      textbox.addEventListener(event, function(e) {
        if (inputFilter(this.value)) {
          // Accepted value.
          if ([ "keydown", "mousedown", "focusout" ].indexOf(e.type) >= 0){
            this.classList.remove("input-error");
            this.setCustomValidity("");
          }
  
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        }
        else if (this.hasOwnProperty("oldValue")) {
          // Rejected value: restore the previous one.
          this.classList.add("input-error");
          this.setCustomValidity(errMsg);
          this.reportValidity();
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        }
        else {
          // Rejected value: nothing to restore.
          this.value = "";
        }
      });
    });
}

const ethFactor = BigInt('1000000000000000000');
const gweiFactor = BigInt('1000000000');

function ethToWei(x) {
    return BigInt(x)*ethFactor;
}

function weiToEth(x) {
    x = BigInt(x) / gweiFactor;
    return Number(x) / 1000000000;
}

// Handles name-related operations.
class NameHandler {
    #available;
    #ready;
    #error;

    constructor(name, nameRegistry, statusCallback) {
        this.name = name;
        this.nameRegistry = nameRegistry;
        this.statusCallback = statusCallback;
        this.#available = false;
        this.#ready = false;
        this.#error = false;
    }

    maybeUseCallback(o) {
        if (!this.statusCallback) {
            return;
        }
        this.statusCallback(o);
    }

    updateName(name) {
        this.name = name;
        this.validateName();
    }

    get available() {
        return this.#available;
    }

    get ready() {
        return this.#ready;
    }

    get error() {
        return this.#error;
    }

    async validateName() {
        let obj = this; // Capture this.
        if (this.name.length < 1) {
            this.#available = false;
            this.#ready = false;
            this.#error = true;
            obj.maybeUseCallback({'error': 'name is too short'});
            return;
        }
        if (! /^[a-zA-Z0-9_][a-zA-Z0-9_\-]*$/.test(this.name)) {
            this.#available = false;
            this.#ready = false;
            this.#error = true;
            obj.maybeUseCallback({'error': 'invalid name'});
            return;
        }
        // Must not contain only symbols.
        if (/^[_\-]+$/.test(this.name)) {
            this.#available = false;
            this.#ready = false;
            this.#error = true;
            obj.maybeUseCallback({'error': 'invalid name'});
            return;
        }
        nameRegistry.methods.lookupName(this.name).call().then(res => {
            if (res.owner == "0x0000000000000000000000000000000000000000") {
                obj.#available = true;
                obj.#ready = true;
                obj.#error = false;
                obj.maybeUseCallback({'available': true});
            } else {
                obj.#available = false;
                obj.#ready = true;
                obj.#error = false;
                obj.maybeUseCallback({'available': false, 'price': res.price, 'owner': res.owner});
            }
        }).catch(err => {
            obj.#available = false;
            obj.#ready = true;
            obj.#error = true;
            obj.maybeUseCallback({'error': err});
        })
    }
}

// logTxMessage logs a message in transaction modal.
function logTxMessage(msg) {
    let logElement = document.getElementById('log');
    let newLogElem = document.createElement('div');
    newLogElem.className = 'modal_entry';
    newLogElem.innerHTML = msg;
    logElement.appendChild(newLogElem);
}

// Web3-related functions.
async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
    } else {
        logTxMessage("Metamask is not installed");
    }
}

async function loadContract() {
    let contractAddress = nameRegistryTestContractAddress;
    if (!useTestnet) {
        contractAddress = nameRegistryContractAddress;
    }
    return await new window.web3.eth.Contract(nameRegistryContractAbi, contractAddress);
}

async function getCurrentAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}

class TransactionModalHandler {
    #modalElement;
    #logElement;
    #modalButton;
    #modalFunc;

    constructor(element, button, log) {
        this.#modalElement = element;
        this.#modalButton = button;
        this.#logElement = log;
        this.#modalFunc = null;

        this.#modalButton.onclick = (event) => {
            event.preventDefault();

            if (this.#modalFunc) {
                this.#modalFunc();
            }
        };
        this.disableModalButton();
    }

    enableModalButton(f) {
        this.#modalButton.style.opacity = 1.0;
        this.#modalButton.style.cursor = 'pointer';
        this.#modalFunc = f;
    }

    disableModalButton() {
        this.#modalButton.style.opacity = 0.6;
        this.#modalButton.style.cursor = 'default';
        this.#modalFunc = null;
    }

    show() {
        while (this.#logElement.firstChild) {
            this.#logElement.removeChild(this.#logElement.firstChild);
        }
        this.#modalElement.style.display = 'block';
        this.disableModalButton();
    }

    hide() {
        this.#modalElement.style = 'none';
    }

    logTxMessage(msg) {
        let newLogElem = document.createElement('div');
        newLogElem.className = 'modal_entry';
        newLogElem.innerHTML = msg;
        this.#logElement.appendChild(newLogElem);
    }
}

class NextButtonHandler {
    #button
    #checkButtonFunc
    #activateFunc
    #enabled

    constructor(button,) {
        this.#button = button;
        let obj = this;
        this.#button.onclick = (event) => {
            event.preventDefault();
            obj.activate();
        }
        this.#enabled = false;
    }

    set checkButtonFunc(f) {
        this.#checkButtonFunc = f;
    }
    
    set activateFunc(f) {
        this.#activateFunc = f;
    }

    checkButton() {
        if (this.#checkButtonFunc && this.#checkButtonFunc()) {
            this.#enabled = true;
            this.#button.style.opacity = 1.0;
        } else {
            this.#enabled = false;
            this.#button.style.opacity = 0.6;
        }
    }

    activate() {
        if (this.#enabled && this.#activateFunc) {
            this.#activateFunc();
        }
    }
}