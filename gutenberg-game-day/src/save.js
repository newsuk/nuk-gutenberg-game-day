/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	console.log(attributes);
	return (
		<div className="chartContainer">
			<div id="chartContainer"></div>
			<script data-options={JSON.stringify(attributes.chartOptions)}>
				const scriptTag = document.currentScript; const data =
				scriptTag.dataset; const options = JSON.parse(data.options);
				console.log(options); var chart = new CanvasJS.Chart("chartContainer",
				options); chart.render();
			</script>
		</div>
	);
}
