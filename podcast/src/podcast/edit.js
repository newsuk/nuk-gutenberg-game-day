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
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from '@wordpress/components'
import { useEffect, useState } from '@wordpress/element';
import { podcasts } from './fixtures/podcastList';

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

	let selectedPodcast = podcasts.find((podcast) => podcast.title === podcastSeries);

	return (
		<div {...useBlockProps()}>
			{/* Edit view. */}
			<h3>LATEST EPISODE</h3>
			<RichText
					tagName="h2" // The tag here is the element output and editable in the admin
					value={titleOverride || podcastSeries} // Any existing content, either from the database or an attribute default
					allowedFormats={[]} // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={( newTitleOverride ) => setAttributes( { titleOverride: newTitleOverride } ) } // Store updated content as a block attribute
					placeholder={ __( selectedPodcast.title ) } // Display this text before any content has been added by the user
			/>

			<RichText
					tagName="p" // The tag here is the element output and editable in the admin
					value={summaryOverride || selectedPodcast.metaDescription} // Any existing content, either from the database or an attribute default
					allowedFormats={[]} // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={( newSummaryOverride ) => setAttributes( { summaryOverride: newSummaryOverride } ) } // Store updated content as a block attribute
					placeholder={ __( selectedPodcast.metaDescription ) } // Display this text before any content has been added by the user
			/>

			{/* Sidebar. */}
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
							setAttributes({
								podcastSeries: newValue,
								titleOverride: null,
								summaryOverride: null,
							});
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
