const mainSlider = document.querySelector('#mainslider')
let mainslideId = 0;

const mainSliderImg = [ 
	{
		slidetitle: 'Бухгалтерские услуги в центре Москвы', 
		bgImage: '1.jpg',
	},
	{
		slidetitle: 'Бухгалтерские услуги в Москве', 
		bgImage: '2.jpg',
	},
	{
		slidetitle: 'Бухгалтерские услуги в центре Санкт-Петербурга', 
		bgImage: '3.jpg',
	},
	{
		slidetitle: 'Бухгалтерские услуги в Санкт-Петербурге', 
		bgImage: '4.jpg',
	},
];

const mainSliderMain = document.createElement('div')
const mainSliderFilms = document.createElement('div')
const mainSlideControl = document.createElement('div')



const mainSlidedotsElem = document.createElement('div')
const mainSlidearrowsElem = document.createElement('div')



const mainarrowLeftElem = document.createElement('div')
const mainarrowRightElem = document.createElement('div')


mainSliderMain.classList.add('mainslidermain')
mainSliderFilms.classList.add('mainsliderfilms')
mainSlideControl.classList.add('mainslidecontrol')


mainSlidedotsElem.classList.add('mainslidedots')
mainSlidearrowsElem.classList.add('mainslidearrows')


mainarrowLeftElem.classList.add('mainarrowleft')
mainarrowRightElem.classList.add('mainarrowright')



mainSlider.append(mainSliderMain, mainSlideControl)
mainSliderMain.append(mainSliderFilms)
mainSlidedotsElem.append(mainSlidearrowsElem)
mainSlidearrowsElem.append(mainarrowLeftElem, mainarrowRightElem)
mainSlideControl.append(mainSlidedotsElem, mainSlidearrowsElem)

mainarrowLeftElem.innerText = '<'
mainarrowRightElem.innerText = '>'

const mainSliderrender = () =>{
	mainSliderFilms.style.right = mainSliderMain.offsetWidth * mainslideId + 'px';

	const dotsList = document.querySelectorAll('.mainslidedots div')
	dotsList.forEach(t => t.classList.remove('active'))
	dotsList[mainslideId].classList.add('active'); 


}

const filmElems = mainSliderImg.map(content =>{
	const divElem = document.createElement('div')
	divElem.style.backgroundImage = `url('media/mainSlider/${content.bgImage}')`;
	divElem.style.width = mainSliderMain.offsetWidth + 'px';

	const contentRange = document.createElement('div')
	contentRange.classList.add('content_range');


	const sliderTitle = document.createElement('div');
	sliderTitle.classList.add('slidertitle');
	sliderTitle.innerText = content.slidetitle;


	const sliderButton = document.createElement('div');
	sliderButton.classList.add('sliderbutton');
	sliderButton.innerText = 'Наша презентация';

	divElem.append(contentRange)
	contentRange.append(sliderTitle, sliderButton)
	
	return divElem
})


mainSliderFilms.append(...filmElems)

window.addEventListener('resize', ()=>{
	
	filmElems.forEach(elem => {
		elem.style.width = mainSliderMain.offsetWidth + 'px';
		mainSliderFilms.style.right = mainSliderMain.offsetWidth * mainslideId + 'px';

	})
})


mainarrowLeftElem.addEventListener("click", event=>{
	if (mainslideId > 0){
		mainslideId --
	}else{
		mainslideId = mainSliderImg.length - 1
	}
	mainSliderrender()
})


mainarrowRightElem.addEventListener("click", event=>{
	if(mainSliderImg.length - 1 > mainslideId){
		mainslideId++;
	}else{
		mainslideId = 0
	}
	mainSliderrender()
})



mainSlidedotsElem.append(...mainSliderImg.map((_, index) => {
	const dotsElem = document.createElement('div')

	dotsElem.addEventListener('click', event => {
		const dotElement = event.target;
		const dotsList = [...dotElement.parentNode.children];
		mainslideId = dotsList.indexOf(dotElement)

		mainSliderrender()
	})

	return dotsElem
}));


mainSliderrender()


