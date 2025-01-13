const quote = document.getElementById("quote");
const authorName = document.getElementById("name");

const newQuoteBtn = document.getElementById("new-quote-btn");
const tweetBtn = document.getElementById("tweet-btn");

tweetBtn.addEventListener("click", () => {
  tweet();
});

newQuoteBtn.addEventListener("click", () => {
  getQuote();
});

async function getQuote() {
  const response = await fetch(
    "https://api.api-ninjas.com/v1/quotes",
    {
      headers: { "X-Api-Key": 'gN+l1zSNFj/86H2S76rufA==XejxlYYKM0h8MshO'},
      contentType: "application/json",
    }
  );
  const data = await response.json();
  quote.innerHTML = `"${data[0].quote}"`;
  authorName.innerHTML = `<span>- </span>${data[0].author}`;
}

function tweet() {
  window.open(
    `https://twitter.com/intent/tweet?text=${quote.innerHTML}`,
    "Tweet Window",
    "width=600, height=300"
  );
}

getQuote();