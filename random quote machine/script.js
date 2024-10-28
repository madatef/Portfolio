let quotesData ={};

const colors = [
	"#480800",
	"#00fdff",
	"#000097",
	"#b0a600",
	"#009dd9",
	"#8f1006",
	"#a1ffff",
	"#570000",
	"#7ad8ff",
	"#94004c",
	"#00aca7",
	"#33001e",
	"#00a6af",
	"#ffae9b",
	"#0a151e",
	"#5c5700",
	"#005f79",
	"#285727",
	"#443853",
	"#2e3f3c"
];


let currentQuote = '',
  currentAuthor = '';

 const getQuotes = function() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function(jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
      }
    }
  });
}

const getRandomQuote = function()  {
  return quotesData.quotes[
    Math.floor(Math.random() * quotesData.quotes.length)
  ];
}


const getQuote = function() {
    let randomQuote = getRandomQuote();
  
    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;
  
    $('#tweet-quote').attr(
      'href',
      'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
        encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
    );
  
    $('#threads-quote').attr(
        'href',
        'https://threads.net/intent/post?text=' +
          encodeURIComponent(currentAuthor) +
          encodeURIComponent(currentQuote)
        );
  
    $('.quote-text').animate({ opacity: 0 }, 400,  function()  {
      $(this).animate({ opacity: 1 }, 400);
      $('#text').text(randomQuote.quote);
    });
  
    $('.quote-author').animate({ opacity: 0 }, 400, function()  {
      $(this).animate({ opacity: 1 }, 400);
      $('#author').html(randomQuote.author);
    });
  
    let color = Math.floor(Math.random() * colors.length);
    $('html body').animate(
      {
        backgroundColor: colors[color],
        color: colors[color]
      },
      700
    );
    $('.button').animate(
      {
        backgroundColor: colors[color]
      },
      700
    );
  }

$(document).ready(function() {
    getQuotes().then(() => {
      getQuote();
    });
  
    $('#new-quote').on('click', getQuote);
  });
