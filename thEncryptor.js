const inputTextArea = document.getElementById("input-text");
const outputTextArea = document.getElementById("output-text");


const cryptMatrix = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
]

const decryptMatrix = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["a", "ames"]
]

//encrypt method
function encrypt(message) {
    for (let i = 0; i < cryptMatrix.length; i++) {
        if (message.includes(cryptMatrix[i][0])) {
            message = message.replaceAll(
                cryptMatrix[i][0],
                cryptMatrix[i][1]
            );
        } 
    }
    return message;
}

//decrypt method
function decrypt(message) {
    for (let i = 0; i < decryptMatrix.length; i++) {
        if (message.includes(decryptMatrix[i][1])) {
            message = message.replaceAll(
                decryptMatrix[i][1],
                decryptMatrix[i][0]
            );
        } 
    }
    return message;
}

//buttons
function encryptButton() {
    let textToEncrytp = encrypt(inputTextArea.value);
    return inner(textToEncrytp);
}

function decryptButton() {
    let textToDecrytp = decrypt(inputTextArea.value);
    return inner(textToDecrytp);
}

function copyButton() {
    let copiedText = outputTextArea.value;
    return navigator.clipboard.writeText(copiedText);
} 

//filling text area
function inner(message) {
    let newmessage = outputTextArea;
    return newmessage.innerHTML = message;
}

//press enter to encrypt
document.addEventListener("keydown", (element) => {
    if (element.code === 'Enter'){
        encryptButton();
    }
})
