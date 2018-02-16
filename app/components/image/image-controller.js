function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imgService = new ImageService()
	var bodyElem = document.getElementById('body')
	function getImage(){
		imgService.getImage(drawImage)
	}
	function drawImage(res){
		template = `<img class="img-responsive" src="${res}">`
		bodyElem.innerHTML = template
	}
	getImage()
}


