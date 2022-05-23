const clSlider = document.querySelector('#clientsslider')
let clslideId = 0;
let frame_count = 4;

const clientsSliderImg = ['1.png','6.png','1.png','6.png'];

const clSliderMain = document.createElement('div')
const clSliderFilms = document.createElement('div')
const clSlideControl = document.createElement('div')


const clSlide = document.createElement('div')



const clSlidedotsElem = document.createElement('div')
const clSlidearrowsElem = document.createElement('div')



const clarrowLeftElem = document.createElement('div')
const clarrowRightElem = document.createElement('div')


clSliderMain.classList.add('clslidermain')
clSliderFilms.classList.add('clsliderfilms')
clSlideControl.classList.add('clslidecontrol')


clSlidedotsElem.classList.add('clslidedots')
clSlidearrowsElem.classList.add('clslidearrows')


clarrowLeftElem.classList.add('clarrowleft')
clarrowRightElem.classList.add('clarrowright')



clSlider.append(clSliderMain, clSlideControl)
clSliderMain.append(clSliderFilms)
clSlidedotsElem.append(clSlidearrowsElem)
clSlidearrowsElem.append(clarrowLeftElem, clarrowRightElem)
clSlideControl.append(clSlidedotsElem, clSlidearrowsElem)

clarrowLeftElem.innerText = '<'
clarrowRightElem.innerText = '>'

const clrender = () => {
    if (window.innerWidth <= 480){
        frame_count = 1;
    }else if (window.innerWidth < 820){
        frame_count = 2;   
    }else if (window.innerWidth < 1200){
        frame_count = 3;   
    }else{
        frame_count = 4;  
    }

	const divElem = document.querySelector('.clsliderfilms div')
	clSliderFilms.style.right = divElem.offsetWidth * clslideId + 'px';

	document.querySelectorAll('.clsliderfilms div').forEach(elem => {
		elem.style.width = clSliderMain.offsetWidth / frame_count + 'px';

	const dotsElems = document.querySelectorAll('.clslidedots div')
	dotsElems.forEach(t => {
		t.classList.remove('active')}
	)
	dotsElems[clslideId].classList.add('active')

	})
}

window.addEventListener('resize', clrender)

clSliderFilms.append(...clientsSliderImg.map(t =>{
	const divElem = document.createElement('div')
	divElem.style.backgroundImage = `url('media/clientsSlider/${t}')`;
	divElem.style.width = clSliderMain.offsetWidth / frame_count + 'px';

	return divElem
}))

clarrowLeftElem.addEventListener("click", event=>{
	if (clslideId > 0){
		clslideId --
	}else{
		clslideId = clientsSliderImg.length - 1
	}
	clrender()
})


clarrowRightElem.addEventListener("click", event=>{

	if(clientsSliderImg.length - 1 > clslideId){
		clslideId ++;
	}else{
		clslideId = 0
	}
	clrender()
})

clSlidedotsElem.append(...clientsSliderImg.map((_, index) => {
	const dotsElem = document.createElement('div')
	dotsElem.addEventListener('click', event => {
		const dotElement = event.target;
		const dotsList = [...dotElement.parentNode.children];

		clslideId = dotsList.indexOf(dotElement)
		clrender()
	})
	return dotsElem
}))

clrender()