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
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, Button } from '@wordpress/components';
import { useState} from '@wordpress/element';
import { XMLParser } from 'fast-xml-parser';
import { countCategories } from './rss-helper';

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


export default function Edit(  { attributes, setAttributes } ) {
	const { rssUrl } = attributes;
	const [localRssUrl, setLocalRssUrl] = useState(rssUrl);

	const fetchRss = async localRssUrl => {
		const parser = new XMLParser();
		const xml = await fetch('http://localhost:8888/wp-content/plugins/rss-reader/assets/rss.xml');
		let json = parser.parse(await xml.text());

		// console.log(json.rss.channel);
		console.log(countCategories(json.rss.channel));
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ 'Settings' }>
					<TextControl
						label={ 'Data Source' }
						value={ localRssUrl }
						placeholder={ 'RSS URL...'}
						onChange={(value) => {
							setLocalRssUrl(value);
						}}
					/>
					<Button
					variant="primary"
					onClick={ () => {
						setAttributes({
							rssUrl: localRssUrl
						});
						fetchRss(localRssUrl)
					}}
					>
					Get Feed
				</Button>
				</PanelBody>
			</InspectorControls>
			<p { ...useBlockProps() }>
				{ __(
					'Gutenberg Game Day – hello from the editor!',
					'gutenberg-game-day'
				) }
			</p>
		</>
	);
}
