const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let passwordOne = ""
let passwordTwo = ""
let pwBoxOne = document.getElementById('pw-box-1')
let pwBoxTwo = document.getElementById('pw-box-2')

console.log(passwordOne)

function getRandomChOne() {
    return Math.floor(Math.random() * characters.length)  
}

function getRandomChTwo() {
    return Math.floor(Math.random() * characters.length)  
}

function generateKeys() {
    passwordOne = ""
    for (let i = 0; i < 15; i++) {
        n = getRandomChOne()
        passwordOne += characters[n]
        pwBoxOne.textContent = passwordOne
    }
    passwordTwo = ""
    for (let i = 0; i < 15; i++) {
        n = getRandomChTwo()
        passwordTwo += characters[n]
        pwBoxTwo.textContent = passwordTwo
    }
}

function copyToClipboardOne() {
    let text = pwBoxOne.textContent

    // Copy text to clipboard
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    }).catch(err => {
      console.error("Copy failed", err);
    });
  }

  function copyToClipboardTwo() {
    let text = pwBoxTwo.textContent

    // Copy text to clipboard
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    }).catch(err => {
      console.error("Copy failed", err);
    });
  }