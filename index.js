const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwdLeft = ""
let pwdRight = ""
let pwdLength = 0
let pwdLeftEl = document.getElementById("pwd-left")
let pwdRightEl = document.getElementById("pwd-right")

//Gives random number
function randomNumber() {
    let randomN = Math.floor(Math.random() * characters.length)
    return randomN   
}

//Prompt function
function promptFunction() {
    pwdLength = prompt("Of how many characters should your password be?");
    return pwdLength
}

//Creates left and right random passwords
function createPwd() {
    if (!pwdLeftEl.textContent) {
        for (let i = 0; i < pwdLength; i++) {
           let randomNew = randomNumber()
            pwdLeft += characters[randomNew]
        }
        for (let i = 0; i < pwdLength; i++) {
            let randomNew = randomNumber()
            pwdRight += characters[randomNew]
        }
        pwdLeftEl.textContent = pwdLeft
        pwdRightEl.textContent = pwdRight    
    } else {
        pwdLeft = ""
        pwdRight = ""
        pwdLeftEl.textContent = ""
        pwdRightEl.textContent = ""
        for (let i = 0; i < pwdLength; i++) {
           let randomNew = randomNumber()
            pwdLeft += characters[randomNew]
        }
        for (let i = 0; i < pwdLength; i++) {
            let randomNew = randomNumber()
            pwdRight += characters[randomNew]
        }
        pwdLeftEl.textContent = pwdLeft
        pwdRightEl.textContent = pwdRight 
    }
}

//Copy to clipboard function
function copyContent(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}
