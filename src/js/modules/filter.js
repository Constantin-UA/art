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
		menu.querySelector(selector).addEventListener('click', () => {
			typeFilter(wrapper.querySelectorAll(selector));
		});
	};

	useTypeFilter('.all');
	useTypeFilter('.lovers');
	useTypeFilter('.chef');
	useTypeFilter('.girl');
	useTypeFilter('.guy');
	typeFilter();
	typeFilter();
};

export default filter;
