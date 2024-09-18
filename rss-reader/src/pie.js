import { Pie } from "react-chartjs-2";
import {Chart, ArcElement, Tooltip, Legend} from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend);

const chartData = (feedCategories) => ({
	labels: feedCategories.map(x => x[0]),
	// datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
	datasets: [
		{
			label: 'Popularity of Sections',
			// data: [55,93,26],
			data: feedCategories.map(x => x[1]),
			// you can set individual colors for each bar
			backgroundColor: [
				'rgba(31, 119, 180, 1)',
				'rgba(255, 127, 14, 1)',
				'rgba(44, 160, 44, 1)',
				'rgba(214, 39, 40, 1)',
				'rgba(148, 103, 189, 1)',
				'rgba(255, 194, 10, 1)',
				'rgba(23, 190, 207, 1)',
				'rgba(227, 119, 194, 1)',
				'rgba(127, 127, 127, 1)',
				'rgba(140, 86, 75, 1)',
			],
			borderWidth: 1,
		}
	],
})

export const PieChart = ({ feedCategories }) => (
	<Pie data={chartData(feedCategories)} />
)
