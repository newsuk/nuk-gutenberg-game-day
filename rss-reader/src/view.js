import { render } from 'react-dom';
import { PieChart } from './pie';

document.addEventListener('DOMContentLoaded', () => {
	const chartContainers = document.querySelectorAll('.pie-chart-container');

	chartContainers.forEach((container) => {
		const feedCategories = JSON.parse(
			container.getAttribute('data-feed-categories')
		);

		render(<PieChart feedCategories={ feedCategories } />, container);
	});
});
