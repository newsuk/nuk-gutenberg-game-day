/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	BlockIcon,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	Placeholder,
	TextControl,
} from '@wordpress/components';
import {
	chartBar as icon,
} from '@wordpress/icons';

import { useState } from '@wordpress/element';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export const data = {
	labels: ['January'],
	datasets: [
		{
			fill: true,
			label: 'Dataset 2',
			data: [22],
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
};

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Chart.js Line Chart',
		},
	},
};

export default function Edit( props ) {
	const {
		attributes,
		setAttributes,
		className,
		isSelected,
		onReplace,
		mergeBlocks,
		clientId,
		context,
	} = props;

//	const [ initialRowCount, setInitialRowCount ] = useState( 2 );

	const { chartData } = attributes;
	data.labels = chartData.map( ( { label } ) => label );
	data.datasets[0].data = chartData.map( ( { data } ) => data );

	const isEmpty = true;


	if(isSelected){
		return (
			<>
		{ isEmpty ? (
			<Placeholder
				label={ __( 'Graph' ) }
				icon={ <BlockIcon icon={ icon } showColors /> }
			>
				<form
					className="blocks-graph__placeholder-form"

				>
					<TextControl
						type="number"
						label={ __( 'Row count' ) }
						min="1"
						className="blocks-table__placeholder-input"
					/>
					<Button
						variant="primary"
						type="submit"
					>
						{ __( 'Create Graph' ) }
					</Button>
				</form>
			</Placeholder>
		) : (
			<p { ...useBlockProps() }>
				<div>
					<div></div>
					<div></div>
				</div>
			</p>
		) }
			</>
		);
	}

	return (
		<p { ...useBlockProps() }>
			<Line data={ data } options={options}  />
		</p>
	);
}
