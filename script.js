const gridItems = document.querySelectorAll(".grid-item-wrapper");

gridItems.forEach(gridItem => {

	gridItem.addEventListener("mouseover",() =>{

		console.log(gridItem.childNodes[1].classList);
		gridItem.childNodes[1].classList.add("img-darken");
		gridItem.childNodes[1].classList.remove("img-slow");

	})

	gridItem.addEventListener("mouseout",() =>{
		
		gridItem.childNodes[1].classList.remove("img-darken");
		gridItem.childNodes[1].classList.add("img-slow");
		
	})
		
	})
		
	

// const textItems = document.querySelectorAll(".grid-item-wrapper");

// textItems.forEach(textItem => {

// 	textItem.addEventListener("mouseover",() =>{

// 		console.log(textItem.childNodes.classList);

// 		// textItem.childNodes[4].classList.add("text-bigger")
// 	})

// 	textItem.addEventListener("mouseout",() =>{

		
// 		textItem.childNodes[4].classList.remove("text-bigger")
// 	})
		
// 	})
// 		