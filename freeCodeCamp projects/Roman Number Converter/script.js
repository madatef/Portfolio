const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// V = 5
// L = 50
// D = 500
// X = 10, C = 100, M = 1000

const convert = (input) => {
    let result = "";
    if (input === "") {
        output.innerText = "Please enter a valid number.";
        output.classList.add("invalid");
        return;
    }
    else if (parseFloat(input) < 0) {
        output.innerText = "Please enter a number greater than or equal to 1.";
        output.classList.add("invalid");
        return;
    }
    else if (parseInt(input) > 3999) {
        output.innerText = "Please enter a number less than or equal to 3999.";
        output.classList.add("invalid");
        return;
    }
    else {
        
        output.innerText = convertToRoman(parseInt(input));
        output.classList.remove("invalid");
    }
    
    
}
const convertToRoman = num => {
    const ref = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
    ];
    const res = [];
  
    ref.forEach(function (arr) {
      while (num >= arr[1]) {
        res.push(arr[0]);
        num -= arr[1];
      }
    });
  
    return res.join('');
  };

convertBtn.addEventListener("click", () => {
    convert(userInput.value);
});
userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") { 
        convert(userInput.value);
    }
});
