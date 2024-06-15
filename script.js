const isItAPalindromeBtn = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

const isItAPalindrome = input => {
    const regex = /[A-Za-z0-9]/;
    const strArray = input.toLowerCase().split("").filter(char => regex.test(char));
    const strArrayReversed = input.toLowerCase().split("").reverse().filter(char => regex.test(char));
    const result = [];
    let resultMsg = "";

    if(input === '') {
        alert("Please input a value");
        return;
    } 

    resultDiv.replaceChildren();

    for (let i = 0; i < strArray.length; i++){
        if(strArray[i] === strArrayReversed[i]) {
            result.push(strArray[i]);
        }
    }   

    if (result.join("") === strArray.join("")) {
        resultMsg = `<strong>${input}</strong> is a palindrome.`
    } else {
        resultMsg = `<strong>${input}</strong> is not a palindrome.`
    }

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMsg;
    resultDiv.appendChild(pTag);

    resultDiv.classList.remove('hidden');
}

isItAPalindromeBtn.addEventListener("click", () => {
    isItAPalindrome(userInput.value);
    userInput.value = '';
})

userInput.addEventListener("keydown", e => {
    if(e.key === "Enter") {
        isItAPalindrome(userInput.value);
        userInput.value = "";
    }
});
    