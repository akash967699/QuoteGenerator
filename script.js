const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote")
const author = document.getElementById("author")
// const newQuote = document.getElementById("newQuote")
async function getquote(url){
    const response = await fetch(url)
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

// newQuote.onclick=getquote(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" +  quote.innerHTML + "-------by" + author.innerHTML, "TWEET WINDOW", "width=600 ,height = 300" )
}


getquote(api_url);