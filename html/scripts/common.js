let nameRegistryContractAbi = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"configName","type":"string"},{"indexed":false,"internalType":"string","name":"configValue","type":"string"}],"name":"ConfigUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"NameOwnershipUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NameRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"PriceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"PublicKeyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"Sale","type":"event"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"bytes","name":"publicKey","type":"bytes"}],"name":"buyName","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"configName","type":"string"}],"name":"lookupConfig","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"lookupName","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"bytes","name":"publicKey","type":"bytes"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"publicKey","type":"bytes"},{"internalType":"string","name":"name","type":"string"}],"name":"registerName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"configName","type":"string"},{"internalType":"string","name":"configValue","type":"string"}],"name":"updateConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"newOwner","type":"address"}],"name":"updateOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"updatePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"publicKey","type":"bytes"},{"internalType":"string","name":"name","type":"string"}],"name":"updatePublicKey","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const useTestnet = true;
const infuraUrl = "https://mainnet.infura.io/v3/8f540714acb24862a8c9a5c3d8568f23";
const infuraTestUrl = "https://sepolia.infura.io/v3/8f540714acb24862a8c9a5c3d8568f23";
const nameRegistryContractAddress = "0xed7a3009dc614469ac5222f5a6efc9f16d6190da";
const nameRegistryTestContractAddress = "0xcc8650c9cd8d99b62375c22f270a803e7abf0de9";
const etherscanBaseTestUrl = "https://sepolia.etherscan.io";
const etherscanBaseUrl = "https://etherscan.io";
const dumpServerAddress = "alpha.ubikom.cc:8826";

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

  const ethFactor = BigInt("1000000000000000000");

  function ethToWei(x) {
    return BigInt(x)*ethFactor;
  }

  function weiToEth(x) {
    return x / ethFactor;
  }