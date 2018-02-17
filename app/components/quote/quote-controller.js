function QuoteController(){

	var qs = new QuoteService()
	var quoteElem = document.getElementById('quote')

	qs.getQuote(drawQuote)

	function drawQuote(res){
		template = `<p>${res.quote}</p><p id='author'>${res.author}</p>`
		quoteElem.innerHTML = template
	}
}
