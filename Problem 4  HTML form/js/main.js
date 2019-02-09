const inputs = document.querySelectorAll('input, select');

for(let input of inputs) {
	input.addEventListener('invalid', e => {
		input.classList.add('error');
	}, false);

	input.addEventListener('valid', e => {
		input.classList.add('valid');
	}, false);
}

let resetForm = () => {
	for(let input of inputs) {
		input.classList.remove('error');
		input.classList.remove('valid');
	}
};