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
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes, id }) {
	const { podcastSeries, episodeId, titleOverride, summaryOverride } = attributes;

	return (
		<div {...useBlockProps()}>
			<pre>{JSON.stringify(attributes, null, 2)}</pre>

			<InspectorControls>
				<PanelBody title={ __( 'Podcast Settings', 'podcast' ) }>
					<SelectControl
						__nextHasNoMarginBottom
						label="Podcast Series"
						value={ podcastSeries }
						options={ [
							{ value: "The Story", label: "The Story" },
							{ value: "The Royals with Roya and Kate", label: "The Royals with Roya and Kate" },
							{ value: "How to win an election", label: "How to win an election" },
							{ value: "Politics Unpacked", label: "Politics Unpacked" },
							{ value: "Your History", label: "Your History" },
							{ value: "Off Air with Jane & Fi", label: "Off Air with Jane & Fi" },
							{ value: "Times news briefing", label: "Times news briefing" },
							{ value: "World in 10", label: "World in 10" },
						] }
						onChange={(newValue) => {
							setAttributes({ podcastSeries: newValue });
						}}
						/>

					<TextControl
						__nextHasNoMarginBottom
						label="Episode ID"
						type="text"
						value={ episodeId }
						onChange={(newEpisodeId) => {
							setAttributes({ episodeId: newEpisodeId });
						}}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
