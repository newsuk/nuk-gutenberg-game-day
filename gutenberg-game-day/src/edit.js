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
import {
	TextControl,
	SelectControl,
	TextareaControl,
	Button,
} from "@wordpress/components";
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
	const [chartDataArray, setChartDataArray] = useState(
		attributes.chartDataArray || [
			{
				label: "",
				value: 0,
			},
		],
	);
	const [chartTitle, setChartTitle] = useState(attributes.chartTitle);
	const [chartType, setChartType] = useState(attributes.chartType);
	const [chartOptions, setChartOptions] = useState(attributes.chartOptions);

	useEffect(() => {
		console.log(chartTitle, chartData, chartDataArray, chartType, chartOptions);

		const options = {
			title: {
				text: chartTitle,
				fontFamily: "The Sun",
				fontWeight: "Bold",
			},
			axisX: {
				labelFontFamily: "The Sun",
			},
			axisY: {
				labelFontFamily: "The Sun",
				includeZero: true,
			},
			exportEnabled: true,
			data: [
				{
					type: chartType,
					toolTipContent:
						chartType === "pie" ? "<b>{label}</b>: {y}%" : undefined,
					indexLabel: chartType === "pie" ? "{label} - {y}%" : undefined,
					dataPoints: chartDataArray.map(({ label, value }) => ({
						label,
						y: parseInt(value),
					})),
				},
			],
			animationEnabled: true,
		};
		setAttributes({
			chartData,
			chartDataArray,
			chartTitle,
			chartType,
			chartOptions: options,
		});
		setChartOptions(options);
	}, [chartData, chartDataArray, chartTitle, chartType]);

	return (
		<div {...useBlockProps()}>
			{__("Gutenberg Chart", "gutenberg-pie-chart")}
			<SelectControl
				label="Chart type"
				value={chartType}
				options={chartTypeOptions}
				onChange={(value) => setChartType(value)}
			/>
			<TextControl
				label="Chart title"
				value={chartTitle}
				onChange={(value) => setChartTitle(value)}
			/>
			{/* <TextareaControl
				label="Comma-separated chart data"
				help="Enter one data item per line separated by a comma"
				value={chartData}
				onChange={(value) => setChartData(value)}
			/> */}
			{chartDataArray && (
				<table>
					<thead>
						<th>Label</th>
						<th>Value</th>
					</thead>
					<tbody>
						{chartDataArray.map((item, index) => (
							<tr>
								<td>
									<TextControl
										value={item.label}
										onChange={(value) => {
											const newChartDataArray = [...chartDataArray];
											newChartDataArray[index].label = value;
											setChartDataArray(newChartDataArray);
										}}
									/>
								</td>
								<td>
									<TextControl
										value={item.value}
										onChange={(value) => {
											const newChartDataArray = [...chartDataArray];
											newChartDataArray[index].value = value;
											setChartDataArray(newChartDataArray);
										}}
									/>
								</td>
								<td>
									<Button
										onClick={() => {
											const newChartDataArray = [...chartDataArray];
											newChartDataArray.splice(index, 1);
											setChartDataArray(newChartDataArray);
										}}
										disabled={chartDataArray.length <= 1}
									>
										{"\u274C"}
									</Button>
								</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={3}>
								<Button
									onClick={() => {
										setChartDataArray([
											...chartDataArray,
											{
												label: "",
												value: 0,
											},
										]);
									}}
								>
									+ Add Item
								</Button>
							</td>
						</tr>
					</tfoot>
				</table>
			)}
			{chartType &&
				chartDataArray?.length &&
				chartOptions?.data &&
				chartOptions.data[0]?.type && (
					<CanvasJSChart
						options={chartOptions}
						/* onRef = {ref => this.chart = ref} */
					/>
				)}
		</div>
	);
}
