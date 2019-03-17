const menuButton = document.querySelector('.menu-button')

menuButton.addEventListener('click', openNav)

let allClosers = document.querySelectorAll('.closer');

allClosers.forEach((closer) => {
	closer.addEventListener('click', closeNav)
})

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

function openNav() {
	document.getElementById("myNav").style.width = "100%";
}