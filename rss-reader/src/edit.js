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
import { PieChart } from "./pie";
import apiFetch from '@wordpress/api-fetch';

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
	const blockProps = useBlockProps();
	const { rssUrl, feedCategories } = attributes;

	const [localRssUrl, setLocalRssUrl] = useState(rssUrl);
	const [isFetchingRss, setFetchingRss] = useState(false);

	const fetchRss = async localRssUrl => {
		const parser = new XMLParser();
		const xml = await apiFetch( { path: `/index.php?rest_route=/gutenberg-game-day/v1/fetch-rss&url=${encodeURI(localRssUrl)}` } );
		 // const xml = await fetch('http://localhost:8888/wp-content/plugins/rss-reader/assets/rss.xml');
		let json = parser.parse(xml);

		// console.log(json.rss.channel);
		const countedCategories = countCategories(json.rss.channel)
		return countedCategories;
	};

	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={'Settings'}>
					<TextControl
						label={'Data Source'}
						value={localRssUrl}
						placeholder={'RSS URL...'}
						onChange={(value) => {
							setLocalRssUrl(value);
						}}
						disabled={isFetchingRss}
					/>
					<Button
						variant="primary"
						onClick={async () => {
							setFetchingRss(true);
							const countedCategories = await fetchRss(localRssUrl);
							setAttributes({
								rssUrl: localRssUrl,
								feedCategories: countedCategories
							});
							setFetchingRss(false);
						}}
						disabled={isFetchingRss}>
						Get Feed
					</Button>
				</PanelBody>
			</InspectorControls>
			<div>
				<PieChart feedCategories={feedCategories}/>
			</div>

		</div>
	);
}
