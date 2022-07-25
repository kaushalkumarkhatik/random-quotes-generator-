const text = document.getElementById("quote");
const author = document.getElementById("author");

const new_quote = async ()=> {
  var url = "https://type.fit/api/quotes";
  const res = await fetch(url);
  const dta = await res.json();
  const indx = Math.floor(Math.random()*dta.length);
  const quote = dta[indx].text;
  const auth = dta[indx].author;
  if (auth == null) {
    author = "Anonymous";
  }
  text.innerHTML = quote;
  author.innerHTML = "~"+auth;
}
new_quote()