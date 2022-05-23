const fbSlider = document.querySelector('#fbslider')
let fbslideId = 0;



const fbList = [
	{
		feedbackText: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
		feedbackPhoto: 'https://get.wallhere.com/photo/face-women-model-portrait-depth-of-field-long-hair-photography-black-hair-fashion-hair-nose-Person-skin-head-supermodel-girl-beauty-smile-eye-woman-lady-lip-blond-hairstyle-portrait-photography-photo-shoot-brown-hair-facial-expression-eyebrow-human-body-organ-close-up-Viktoria-Zabiiako-613396.jpg',
		feedbackUser: 'Евгения Хмелева',
		feedbackCompany: 'Менеджер ООО "Арарат"'
	},
	{
		feedbackText: 'С учётом сложившейся международной обстановки, повышение уровня гражданского сознания однозначно определяет каждого участника как способного принимать собственные решения касаемо новых предложений. Являясь всего лишь частью общей картины, интерактивные прототипы будут обнародованы.В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов.',
		feedbackPhoto: 'https://s1.1zoom.ru/b5454/447/Men_Smile_Glance_Trunk_tree_Sweater_568128_2048x2732.jpg',
		feedbackUser: 'Артемий',
		feedbackCompany: 'Директор ООО "Рога и Копыта"'
	},
	{
		feedbackText: 'Равным образом, курс на социально-ориентированный национальный проект не даёт нам иного выбора, кроме определения укрепления моральных ценностей. Но явные признаки победы институционализации лишь добавляют фракционных разногласий и разоблачены. Следует отметить, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании существующих финансовых и административных условий.',
		feedbackPhoto: 'https://i07.fotocdn.net/s125/2da6048825e9af66/gallery_xl/2851438362.jpg',
		feedbackUser: 'Аркадий',
		feedbackCompany: 'Руководитель ООО "Президент"'
	},
	{
		feedbackText: 'Внезапно, интерактивные прототипы объективно рассмотрены соответствующими инстанциями. Современные технологии достигли такого уровня, что начало повседневной работы по формированию позиции способствует повышению качества модели развития. Банальные, но неопровержимые выводы, а также сделанные на базе интернет-аналитики выводы могут быть представлены в исключительно положительном свете.',
		feedbackPhoto: 'https://i04.fotocdn.net/s109/3ce7680f90ff4bee/gallery_xl/2424723031.jpg',
		feedbackUser: 'Марина',
		feedbackCompany: 'Бухгалтер ООО "Результат"'
	},
]

const fbSliderMain = document.createElement('div')
const fbSliderFilms = document.createElement('div')
const fbSlideControl = document.createElement('div')


const fbSlide = document.createElement('div')



const fbSlidedotsElem = document.createElement('div')
const fbSlidearrowsElem = document.createElement('div')



const fbarrowLeftElem = document.createElement('div')
const fbarrowRightElem = document.createElement('div')


fbSliderMain.classList.add('fbslidermain')
fbSliderFilms.classList.add('fbsliderfilms')
fbSlideControl.classList.add('fbslidecontrol')


fbSlidedotsElem.classList.add('fbslidedots')
fbSlidearrowsElem.classList.add('fbslidearrows')


fbarrowLeftElem.classList.add('fbarrowleft')
fbarrowRightElem.classList.add('fbarrowright')



fbSlider.append(fbSliderMain, fbSlideControl)
fbSliderMain.append(fbSliderFilms)
fbSlidedotsElem.append(fbSlidearrowsElem)
fbSlidearrowsElem.append(fbarrowLeftElem, fbarrowRightElem)
fbSlideControl.append(fbSlidedotsElem, fbSlidearrowsElem)

fbarrowLeftElem.innerText = '<'
fbarrowRightElem.innerText = '>'


const fbElem = fbList.map(t =>{
	const divElem = document.createElement('div')
	divElem.style.backgroundColor = '#EBEBEB';
	divElem.style.width = fbSliderMain.offsetWidth + 'px';

	const pTextElem = document.createElement('p')

	const authorElem = document.createElement('div')
	const userDivElem = document.createElement('div')
	const userImgElem = document.createElement('div')
	const pUserElem = document.createElement('p')
	const pUserCompElem = document.createElement('p')

	authorElem.classList.add('author')
	userImgElem.classList.add('userimage')
	userDivElem.classList.add('usercontainer')
	pUserElem.classList.add('username')


	authorElem.append(userImgElem, userDivElem)
	userDivElem.append(pUserElem, pUserCompElem)


	divElem.append(pTextElem, authorElem)


	userImgElem.style.backgroundImage = `url('${t.feedbackPhoto}')`;
	pTextElem.innerText = t.feedbackText
	pUserElem.innerText = t.feedbackUser
	pUserCompElem.innerText = t.feedbackCompany

	
	return divElem
})

fbSliderFilms.append(...fbElem)


const fbrender = () => {
	const windowWidth = fbSliderMain.offsetWidth
	fbSliderFilms.style.right = windowWidth * fbslideId + 'px';

	const dotsList = document.querySelectorAll('.fbslidedots div')
	dotsList.forEach(t => t.classList.remove('active'))
	dotsList[fbslideId].classList.add('active'); 
}


window.addEventListener('resize', ()=>{
	fbElem.forEach(elem => {
		elem.style.width = fbSliderMain.offsetWidth + 'px';
	})
})

fbarrowLeftElem.addEventListener("click", event=>{
	if (fbslideId > 0){
		fbslideId --
	}else{
		fbslideId = fbList.length - 1
	}
	fbrender()
})


fbarrowRightElem.addEventListener("click", event=>{
	if(fbList.length - 1 > fbslideId){
		fbslideId++;
	}else{
		fbslideId = 0
	}
	fbrender()
})

fbSlidedotsElem.append(...fbList.map((_, index) => {
	const dotsElem = document.createElement('div')

	dotsElem.addEventListener('click', event => {
		const dotElement = event.target;
		const dotsList = [...dotElement.parentNode.children];
		slideId = dotsList.indexOf(dotElement)

		fbrender()
	})

	return dotsElem
}));

fbrender()