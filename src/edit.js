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
import { BlockIcon, useBlockProps } from '@wordpress/block-editor';
import {
	Button,
	Placeholder,
	TextControl,
	__experimentalInputControl as InputControl, // eslint-disable-line
} from '@wordpress/components';
import { chartBar as icon } from '@wordpress/icons';

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
	Legend,
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
	const { attributes, setAttributes, isSelected } = props;

	const [ initialRowCount, setInitialRowCount ] = useState( 2 );
	const [ chartTitle, setChartTitle ] = useState( '' );
	const [ dataSetTitle, setDataSetTitle ] = useState( '' );

	const blockProps = useBlockProps();
	const { chartData, chartRows } = attributes;

	const data = {
		datasets: [
			{
				fill: true,
				label: dataSetTitle,
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};

	data.labels = chartData.map( ( { label } ) => label );
	data.datasets[ 0 ].data = chartData.map( ( { data: _data } ) => _data );
	options.plugins.title.text = chartTitle;

	const isEmpty = typeof chartRows === 'undefined';

	// Initialize an empty array to store the row elements
	const rows = [];

	const onRowCountChange = ( number, field, value ) => {
		if ( ! chartData[ number - 1 ] ) {
			chartData[ number - 1 ] = {};
		}
		chartData[ number - 1 ][ field ] = value;
		setAttributes( { chartData } );
	};

	if ( chartRows ) {
		// Use a for loop to generate the rows
		for ( let i = 1; i <= chartRows; i++ ) {
			rows.push(
				<tr key={ i }>
					<td>
						<InputControl
							value={ chartData[ i - 1 ]?.label }
							onChange={ ( value ) =>
								onRowCountChange( i, 'label', value )
							}
						/>
					</td>
					<td>
						<InputControl
							value={ chartData[ i - 1 ]?.data }
							onChange={ ( value ) =>
								onRowCountChange( i, 'data', value )
							}
						/>
					</td>
				</tr>
			);
		}
	}

	if ( isSelected ) {
		return (
			<>
				{ isEmpty ? (
					<Placeholder
						label={ __( 'Graph' ) }
						icon={ <BlockIcon icon={ icon } showColors /> }
					>
						<form
							className="blocks-graph__placeholder-form"
							onSubmit={ ( event ) => {
								event.preventDefault();
								setAttributes( {
									chartRows: initialRowCount,
									dataSetTitle,
									chartTitle,
								} );
							} }
						>
							<TextControl
								__next40pxDefaultSize
								type="text"
								label={ __( 'Title' ) }
								value={ chartTitle }
								onChange={ ( value ) => {
									setChartTitle( value );
								} }
								className="blocks-table__placeholder-input"
							/>

							<TextControl
								__next40pxDefaultSize
								type="text"
								label={ __( 'Dataset Title' ) }
								value={ dataSetTitle }
								onChange={ ( value ) => {
									setDataSetTitle( value );
								} }
								className="blocks-table__placeholder-input"
							/>
							<TextControl
								__next40pxDefaultSize
								type="number"
								label={ __( 'Row count' ) }
								min="1"
								value={ initialRowCount }
								onChange={ ( value ) => {
									setInitialRowCount( value );
								} }
								className="blocks-table__placeholder-input"
							/>
							<div className="blocks-graph__placeholder-form-submit">
								<Button variant="primary" type="submit">
									{ __( 'Create Graph' ) }
								</Button>
							</div>
						</form>
					</Placeholder>
				) : (
					<p { ...blockProps }>
						<table>
							<tr>
								<th>{ __( 'Label' ) }</th>
								<th>{ __( 'Data' ) }</th>
							</tr>
							{ rows }
						</table>
					</p>
				) }
			</>
		);
	}

	return (
		<p { ...blockProps }>
			<Line data={ data } options={ options } />
		</p>
	);
}
