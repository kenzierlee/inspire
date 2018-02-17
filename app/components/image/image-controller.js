function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imgService = new ImageService()

	function getImage(){
		imgService.getImage(drawImage)
	}
	function drawImage(res){
		document.body.style.backgroundImage = `url(${res})`
	}
	getImage()
}


