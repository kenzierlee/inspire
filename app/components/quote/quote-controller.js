function QuoteController(){

	var qs = new QuoteService()
	var quoteData = []
	var quoteElem = document.getElementById('quote')

	function getQuote(){
		qs.getQuote(function(drawQuote){
			console.log('What is the quote', quote)
			quoteData.push(drawQuote)
		})
	}
	function drawQuote(){
		template = `<p>${quoteData.quote}</p><p class='hidden'>${quoteData.author}</p>`
		quoteElem.innerHTML = template
	}
	getQuote()
}
