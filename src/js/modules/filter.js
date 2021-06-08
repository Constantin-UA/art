const filter = () => {
	const menu = document.querySelector('.portfolio-menu'),
		items = menu.querySelectorAll('li'),
		wrapper = document.querySelector('.portfolio-wrapper'),
		markAll = wrapper.querySelectorAll('.all'),
		no = document.querySelector('.portfolio-no');

	const typeFilter = (markType) => {
		markAll.forEach((mark) => {
			mark.style.display = 'none';
			mark.classList.remove('animated', 'fadeIn');
		});

		no.style.display = 'none';
		no.classList.remove('animated', 'fadeIn');

		if (markType) {
			markType.forEach((mark) => {
				mark.style.display = 'block';
				mark.classList.add('animated', 'fadeIn');
			});
		} else {
			no.style.display = 'block';
			no.classList.add('animated', 'fadeIn');
		}
	};

	const useTypeFilter = (selector) => {
		if (selector === '.grandmother' || selector === '.granddad') {
			menu.querySelector(selector).addEventListener('click', () => {
				typeFilter();
			});
		} else {
			menu.querySelector(selector).addEventListener('click', () => {
				typeFilter(wrapper.querySelectorAll(selector));
			});
		}

		menu.addEventListener('click', (e) => {
			let target = e.target;

			if (target && target.tagName == 'LI') {
				items.forEach((btn) => btn.classList.remove('active'));
				target.classList.add('active');
			}
		});
	};

	useTypeFilter('.all');
	useTypeFilter('.lovers');
	useTypeFilter('.chef');
	useTypeFilter('.girl');
	useTypeFilter('.guy');
	useTypeFilter('.grandmother');
	useTypeFilter('.granddad');
};

export default filter;
