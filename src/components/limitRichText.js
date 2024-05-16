import { RichText } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const LimitRichText = ({ className, value, onChange, placeholder, tagName, allowedFormats, style, characterLimit }) => {
	const [isExceedingLimit, setIsExceedingLimit] = useState(false);

	const handleOnChange = (updatedContent) => {
		onChange(updatedContent);
		if (updatedContent.length <= characterLimit) {
			setIsExceedingLimit(false);
		} else {
			setIsExceedingLimit(true);
		}
	};

	return (
		<div className='field-container'>
			<RichText
				className={className}
				onChange={handleOnChange}
				value={value}
				placeholder={placeholder}
				tagName={tagName}
				allowedFormats={allowedFormats}
				style={style}
			/>
			{isExceedingLimit && (
				<p className='error'>
					{__( 'Limit exceeded ', 'eyecatcher' )}
					({value.length}/{characterLimit})
				</p>
			)}
		</div>
	);
};

export default LimitRichText;
