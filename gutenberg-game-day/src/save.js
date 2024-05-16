import { useBlockProps, RichText } from '@wordpress/block-editor';

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
