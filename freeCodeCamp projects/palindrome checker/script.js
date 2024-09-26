const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-button");
const result = document.getElementById("result");

function cleanInput(input) {
    const regex = /[^a-zA-Z0-9]/gi
    const cleanStr  = input.replace(regex, '').toLowerCase();
    return cleanStr;
}

const checkPalindrome = (input) => {
    if (input === "") {
        alert("Please enter a text.");
        return;
    }
    const resultHTML = `<strong>${userInput.value}</strong> ${input === [...input].reverse().join("") ? "is" : "is not"} a palindrome.`;
    result.innerHTML = resultHTML;
    result.classList.remove("hidden");
    
}
checkButton.addEventListener("click", () => {
    checkPalindrome(cleanInput(userInput.value));
    userInput.value = "";
});
userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") { 
        checkPalindrome(cleanInput(userInput.value));
        userInput.value = "";
    }
});
