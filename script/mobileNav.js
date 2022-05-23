const menuElem = document.querySelector('#menu');
const burgerElem = document.querySelector('#burger');

burgerElem.addEventListener('click', () => {
	menuElem.classList.toggle('active')

	menuElem.querySelectorAll('a').forEach(elem => {
		if (menuElem.classList == 'active'){
			elem.style.display = 'flex'
		}else{
			setTimeout(() => {elem.style.display = 'none'}, 100)
		}
	})
})
