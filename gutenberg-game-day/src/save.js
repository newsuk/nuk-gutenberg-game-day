/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

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
 const { kicker, headline, subdeck, headlineColour, kickerBackgroundColour, is90sMode } = attributes;

 return (
  <div { ...useBlockProps.save() } className={ is90sMode ? 'nineties-mode' : '' }>
		  <div className={'wp-block-create-block-gutenberg-game-day'}>
			  <RichText.Content
				  tagName="h4"
				  value={kicker}
				  style={{backgroundColor: kickerBackgroundColour}}
				  id={'gutenberg-game-day-kicker'}
				  className={'gutenberg-game-day-richtext'}
			  />
			  <RichText.Content
				  tagName="h2"
				  value={headline}
				  style={{color: headlineColour}}
				  id={'gutenberg-game-day-headline'}
				  className={'gutenberg-game-day-richtext'}
			  />
			  <div className={'gutenberg-game-day-faces-group'}>
				  <img
					  src={"https://www.staging-thesun.co.uk/wp-content/uploads/2024/05/Joel.png"}
					  className={'gutenberg-game-day-faces dvd-screensaver'}
				  />
				  <img
					  src={"https://www.staging-thesun.co.uk/wp-content/uploads/2024/05/Umer.png"}
					  className={'gutenberg-game-day-faces dvd-screensaver'}
				  />
				  <img
					  src={"https://www.staging-thesun.co.uk/wp-content/uploads/2024/05/Jack.png"}
					  className={'gutenberg-game-day-faces dvd-screensaver'}
				  />
			  </div>
			  <RichText.Content
				  tagName="h3"
				  value={subdeck}
				  id={'gutenberg-game-day-subdeck'}
				  className={'gutenberg-game-day-richtext'}
			  />
		  </div>
  </div>
 );
}
