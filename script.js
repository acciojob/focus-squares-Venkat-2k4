        //your JS code here. If required.
const boxes = document.querySelectorAll('.square');

boxes.forEach((box)=>{
	box.addEventListener("mouseover",(e)=>{
		changeColors(e.target.id ,"#6F4E37")
	})
})


boxes.forEach((box)=>{
	box.addEventListener("mouseout",(e)=>{
		changeColors(e.target.id ,"#E6E6FA")
})
})

	const changeColors=(boxid,color)=>{
		boxes.forEach((box)=>{
			if(box.id!== boxid ){
				box.style.backgroundColor = color;
			}
		})
	}