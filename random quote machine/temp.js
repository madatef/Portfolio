const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

async function getQuotes() {
    let quotes;
    quotes = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const result = await quotes.json();
    console.log(result);
    return result;
}
const updateUI =  async () => {
let resQuotes = await getQuotes();
let curQuote = resQuotes.quotes[1].quote;
let curAuthor = resQuotes.quotes[1].author;
quoteText.innerText = curQuote;
authorText.innerText  = curAuthor;
}
updateUI();
