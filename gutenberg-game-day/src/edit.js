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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/* Custom Components */
import Kicker from "./components/kicker";
import Headline from "./components/headline";
import Subdeck from "./components/subdeck";

import { dispatch, select } from '@wordpress/data'; // Like Redux with predefined actions and states - Use createReduxStore for custom store, actions, reducers

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	// console.log('Editor props: ', props);

	const handleChange = attribute => value => {
		if (value.length >= props.attributes[`${attribute}MaxLength`]) {
			select('core/notices').getNotices().forEach(notice => {
				if (notice.status === 'error') {
					dispatch('core/notices').removeNotice(notice.id);
				}
			});
			dispatch('core/notices').createErrorNotice(
				`In ${attribute} a value of length ${value.length} was added, which exceeds or is equal to the maximum ${props.attributes[`${attribute}MaxLength`]}`
			);
		}
		props.setAttributes({ [attribute]: value })
	};

	return (
		<div { ...useBlockProps() }>
			{ __(
				'Gutenberg Game Day – hello from the editor!',
				'gutenberg-game-day'
			) }
			<br />
			<Kicker
				text={props.attributes.kicker}
				backgroundColor={props.attributes.kickerBackgroundColor}
				textColor={props.attributes.kickerTextColor}
				setKicker={handleChange('kicker')}
				setKickerBackgroundColor={handleChange('kickerBackgroundColor')}
				setKickerTextColor={handleChange('kickerTextColor')}
				maxLength={props.attributes.kickerMaxLength}
			/>
			<Headline
				text={props.attributes.headline}
				textColor={props.attributes.headlineTextColor}
				setHeadline={handleChange('headline')}
				setHeadlineTextColor={handleChange('headlineTextColor')}
				maxLength={props.attributes.headlineMaxLength}
			/>
			<Subdeck
				text={props.attributes.subdeck}
				textColor={props.attributes.subdeckTextColor}
				setSubdeck={handleChange('subdeck')}
				setSubdeckTextColor={handleChange('subdeckTextColor')}
				maxLength={props.attributes.subdeckMaxLength}
			/>
		</div>
	);
}
