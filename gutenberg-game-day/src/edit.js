/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

import { useState, useEffect } from "react";
import { TextControl } from "@wordpress/components";
import CanvasJS from '@canvasjs/charts';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const [chartData, setChartData] = useState(attributes.chartData);

	let chart = new CanvasJS.Chart("chartContainer", {
		exportEnabled: true,
		animationEnabled: true,
		title:{
			text: "State Operating Funds"
		},
		legend:{
			cursor: "pointer",
			itemclick: explodePie
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{name}: <strong>{y}%</strong>",
			indexLabel: "{name} - {y}%",
			dataPoints: [
				{ y: 26, name: "School Aid", exploded: true },
				{ y: 20, name: "Medical Aid" },
				{ y: 5, name: "Debt/Capital" },
				{ y: 3, name: "Elected Officials" },
				{ y: 7, name: "University" },
				{ y: 17, name: "Executive" },
				{ y: 22, name: "Other Local Assistance"}
			]
		}]
	});

	useEffect(() => {
		console.log(chartData);
		setAttributes({
			chartData,
		});
		chart.render();
	}, [chartData]);

	return (
		<div {...useBlockProps()}>
			{__(
				"Gutenberg Pie Chart – Enter comma-separated values",
				"gutenberg-pie-chart",
			)}
			<TextControl
				__nextHasNoMarginBottom
				label="Comma-separated chart data"
				value={chartData}
				onChange={(value) => setChartData(value)}
			/>
			<div id="chartContainer" style="height: 370px; width: 100%;"></div>
		</div>
	);
}
