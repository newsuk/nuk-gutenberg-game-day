import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		kicker,
		kickerBackgroundColor,
		kickerTextColor,
		headline,
		headlineTextColor,
		subdeck
	} = attributes;
	return (
		<div className='eyecatcher-container'>
			{kicker &&
				<RichText.Content
					{ ...useBlockProps.save() }
					className='kicker'
					tagName="h2"
					value={ kicker }
					style={{color: kickerTextColor, backgroundColor: kickerBackgroundColor}}
				/>
			}
			{headline &&
				<RichText.Content
					{ ...useBlockProps.save() }
					className='headline'
					tagName="h1"
					value={ headline }
					style={{color: headlineTextColor}}
				/>
			}
			{subdeck &&
				<RichText.Content
					{ ...useBlockProps.save() }
					className='subdeck'
					tagName="p"
					value={ subdeck }
				/>
			}
		</div>
	);
}
