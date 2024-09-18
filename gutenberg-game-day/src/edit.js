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
import { TextControl, SelectControl } from "@wordpress/components";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const chartTypeOptions = [
	{
		label: "Select chart type",
		value: "",
	},
	{
		label: "Line",
		value: "line",
	},
	{
		label: "Pie",
		value: "pie",
	},
	{
		label: "Column",
		value: "column",
	},
	{
		label: "Area",
		value: "area",
	},
	{
		label: "Bar",
		value: "bar",
	},
];

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
	const [chartTitle, setChartTitle] = useState(attributes.chartTitle);
	const [chartType, setChartType] = useState(attributes.chartType);
	const [options, setOptions] = useState({});

	useEffect(() => {
		console.log(chartTitle, chartData, chartType);

		const options = {
			title: {
				text: chartTitle,
			},
			data: [
				{
					type: chartType,
					dataPoints: chartData.split(",").map((item, index) => ({
						label: `Line ${index + 1}`,
						y: parseInt(item),
					})),
				},
			],
		};
		setAttributes({
			chartData,
			chartTitle,
			chartType,
		});
		setOptions(options);
	}, [chartData, chartTitle, chartType]);

	return (
		<div {...useBlockProps()}>
			{__(
				"Gutenberg Pie Chart – Enter comma-separated values",
				"gutenberg-pie-chart",
			)}
			<SelectControl
				__nextHasNoMarginBottom
				label="Chart type"
				value={chartType}
				options={chartTypeOptions}
				onChange={(value) => setChartType(value)}
			/>
			<TextControl
				__nextHasNoMarginBottom
				label="Chart title"
				value={chartTitle}
				onChange={(value) => setChartTitle(value)}
			/>
			<TextControl
				__nextHasNoMarginBottom
				label="Comma-separated chart data"
				value={chartData}
				onChange={(value) => setChartData(value)}
			/>
			{chartType && chartData && options.data && options.data[0]?.type && (
				<CanvasJSChart
					options={options}
					/* onRef = {ref => this.chart = ref} */
				/>
			)}
		</div>
	);
}
