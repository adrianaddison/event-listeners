var elems = document.getElementsByClassName('myClass'), i;

for (i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', function () {
		'use strict';
		this.innerHTML = i;
	});
}