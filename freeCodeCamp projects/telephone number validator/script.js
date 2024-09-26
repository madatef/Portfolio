const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validateInput = (event) => {
    event.preventDefault();
    if (input.value === "") {
        alert("Please provide a phone number");
        return;
    }
    if (matchFormat(input.value)) {
        const message = document.createElement("div");
        message.classList.add("valid");
        message.innerText = `Valid US number: ${input.value}`;
        resultsDiv.appendChild(message);
        input.value = "";
    }
    else {
        const message = document.createElement("div");
        message.classList.add("invalid");
        message.innerText = `Invalid US number: ${input.value}`;
        resultsDiv.appendChild(message);
        input.value = "";
    }
    

}

const clearScreen = (event) => {
    event.preventDefault();
    resultsDiv.innerHTML = "";

}

const matchFormat = str => {
    const countryCode = '^(1\\s?)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
    const separators = '[\\s\\-]?';
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
    const formatRegex = new RegExp(`${countryCode}${areaCode}${separators}${phoneNumber}`);
    return formatRegex.test(str);
}











input.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        return validateInput(e);
    }
    });
checkBtn.addEventListener("click", validateInput);
clearBtn.addEventListener("click", clearScreen);