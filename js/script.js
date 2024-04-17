let quoteParent = document.querySelector(".quote-parent");
let myQuote = document.querySelector(".myQuote");
let author = document.querySelector(".author");
let twitter = document.querySelector(".twitter");
let newQuoteBtn = document.querySelector(".new-quote");
let loader = document.getElementsByClassName("loader");
let apiQuotes = [];
function showLoadingSpinner() {
  loader.hidden = false;
  quoteParent.hidden = true;
}
// Hide Load
function removeLoadingSpinnner() {
  document.querySelector(".loader").classList.add("hidden");
  quoteParent.hidden = false;
}
function newQuote() {
  showLoadingSpinner();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!quote.author) {
    author.textContent = "UnKnown";
  } else {
    author.textContent = quote.author;
  }
  myQuote.textContent = quote.text;
  removeLoadingSpinnner();
}
function tweetQuote() {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${myQuote.textContent} - ${author.textContent}`;
  window.open(tweetUrl, "_blank");
}
twitter.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", newQuote);

async function getQuotes() {
  showLoadingSpinner();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const res = await fetch(apiUrl);
    apiQuotes = await res.json();
    newQuote();
  } catch (error) {
    console.log(error);
  }
}
getQuotes();

console.log(Math.floor(Math.random() * 16));
