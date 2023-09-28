const btn = document.getElementById("getbtn");

const QuoteElem = document.getElementById("quote");

const fetchData = async () => {
  QuoteElem.innerHTML = `<p>Loading...</p>`;
  let data = await fetch("https://api.quotable.io/random");

  let json = await data.json();

  QuoteElem.innerHTML = `<p>${json.content}</p>`;
};

btn.addEventListener("click", fetchData);

fetchData();