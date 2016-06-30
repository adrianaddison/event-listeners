// GO!
// Task #1
// Add a button into the answer-box that, when clicked, will toggle the visibility of the nav menu. The easiest way is probably to change the class on the nav menu. (Check the css file.)
// classList.toggle

// get nav where button needs adding
	var anbox1 = document.querySelector('.answer-box');

// create new element (button) to place inside .answer-box
	var btn1 = document.createElement('button');

// text to button
	btn1.textContent = 'hide nav';

// place inside .answer-box
	anbox1.appendChild(btn1);

// add event listener to toggle visibility of the nav menu
function removeNav () {
	var nav1 = document.querySelector('.nav-menu');
	
	//Remove a class: element.classList.toggle("classToRemove"); 
	nav1.classList.toggle('nav-menu-hidden');
	if (btn1.textContent === 'hide nav') {
		btn1.textContent = 'show nav';
	} else {
		btn1.textContent = 'hide nav';
	}
	
}


// btn1.removeEventListener('click', removeNav);

btn1.addEventListener('click', removeNav); 


// Task #2
//When the user hits enter while focus is on the input, the content of the input should be added to the list below.
var input2 = document.querySelector('input');
// var anbox2 = document.querySelector('#add-guest .answer-box');

input2.setAttribute("id", 'add-guest');


var list = document.querySelector('#add-guest ul');

input2.addEventListener('keyup', function (e) {
			if (e.keyCode === 13) {
				var li = document.createElement('li');
				li.textContent = input2.value;
				list.appendChild(li);
				li.className = 'guest';
				input2.value = '';
			}
		});


// Task #3
var input = document.querySelector('#add-guest-bonus input');
// var anbox2 = document.querySelector('#add-guest .answer-box');

var list2 = document.querySelector('#add-guest-bonus ul');

input.addEventListener('keyup', function (e) {
		var li;
		var button;
			if (e.keyCode === 13) {
				button = document.createElement('button');
				button.textContent = 'x';
				button.addEventListener('click', function(){
					li.parentElement.removeChild(li);
				});
				li = document.createElement('li');
				li.textContent = input.value;
				li.appendChild(button);
				list2.appendChild(li);
				li.className = 'guest';
				input.value = '';
			}
		});