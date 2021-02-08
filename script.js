window.onload = init;
function init() {
  newQuote();
}
function newQuote() {
  let number = Math.floor(Math.random() * ARRAYQUOTE.length);
  let twitterLink =
    "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22";

  let quoteApiText = ARRAYQUOTE[number].text.replace(/ /g, "%20");
  twitterLink += quoteApiText + "%22";
  let quoteApiAuthor = ARRAYQUOTE[number].author.replace(/ /g, "%20");
  twitterLink += " - " + quoteApiAuthor;

  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById(
    "text"
  ).textContent = `" ${ARRAYQUOTE[number].text} "`;
  document.getElementById("author").textContent = ARRAYQUOTE[number].author;
}
const ARRAYQUOTE = [
  {
    text:
      "Don't worry about a thing, 'cause every little thing gonna be all right",
    author: "Bob Marley",
  },
  {
    text: "An obsession is where something will not leave your mind",
    author: "Eric Clapton",
  },
  {
    text:
      "It's so important to me to make the music right that I didn't have time to be intimidated.",
    author: "Marcus Miller",
  },
  {
    text: "I like to use the audience as my color palette, my instrument.",
    author: "Bobby McFerrin",
  },
];
