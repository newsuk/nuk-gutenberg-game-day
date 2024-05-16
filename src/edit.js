import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker
} from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import './editor.scss';
import LimitRichText from './components/limitRichText';
import { useDispatch } from '@wordpress/data';

export default function Edit({ attributes, setAttributes }) {
	const { createNotice } = useDispatch('core/notices');
	const { lockPostSaving, unlockPostSaving } = useDispatch('core/editor');
	const [isBlocked, seIsBlocked] = useState(false);

	const {
		kicker,
		kickerBackgroundColor,
		kickerTextColor,
		headline,
		headlineTextColor,
		subdeck
	} = attributes;

	useEffect(() => {
		if (
			kicker && kicker.length > 20 ||
			headline && headline.length > 80 ||
			subdeck && subdeck.length > 150
		) {
			lockPostSaving('update-locker');
			createNotice('info', __('Updating is now blocked.', 'eyecatcher'), {
				status: 'error',
				icon: '🔻',
				isDismissible: true,
				type: 'snackbar',
			});
			seIsBlocked(true);
		} else {
			seIsBlocked(false);
		}
	}, [
		kicker,
		headline,
		subdeck,
		lockPostSaving,
		unlockPostSaving,
		createNotice
	]);

	useEffect(() => {
		if (!isBlocked) {
			unlockPostSaving('update-locker');
			createNotice('info', __('Updating is now enabled.', 'eyecatcher'), {
				status: 'success',
				icon: '💚',
				isDismissible: true,
				type: 'snackbar',
			}, 100);
		}
	}, [
		isBlocked,
		createNotice,
		unlockPostSaving
	]);

	const kickerColorUpdate = (type, color) => {
		if (type === 'bg') {
			setAttributes({ kickerBackgroundColor: color });
		}
		if (type === 'text') {
			setAttributes({ kickerTextColor: color });
		}
	};

	const headlineColorUpdate = (type, color) => {
		if (type === 'text') {
			setAttributes({ headlineTextColor: color });
		}
	};

	return (
		<div className='eyecatcher-container'>
			<InspectorControls>
				<PanelColorSettings
					title={__('Kicker Styling', 'eyecatcher')}
					icon="admin-appearance"
					initialOpen
					disableCustomColors={false}
					colorSettings={[
						{
							value: kickerBackgroundColor,
							onChange: (color) => kickerColorUpdate('bg', color),
							label: __('Background Color', 'eyecatcher'),
						},
						{
							value: kickerTextColor,
							onChange: (color) => kickerColorUpdate('text', color),
							label: __('Text Color', 'eyecatcher'),
						},
					]}
				>
					<ContrastChecker
						textColor={kickerTextColor}
						backgroundColor={kickerBackgroundColor}
					/>
				</PanelColorSettings>
				<PanelColorSettings
					title={__('Headline Styling', 'eyecatcher')}
					icon="admin-appearance"
					initialOpen
					disableCustomColors={false}
					colorSettings={[
						{
							value: headlineTextColor,
							onChange: (color) => headlineColorUpdate('text', color),
							label: __('Text Color', 'eyecatcher'),
						},
					]}
				>
					<ContrastChecker
						textColor={headlineTextColor}
						backgroundColor={'#FFFFFF'}
					/>
				</PanelColorSettings>
			</InspectorControls>
			<LimitRichText
				{...useBlockProps}
				className='kicker'
				onChange={(value) => setAttributes({ kicker: value })}
				value={kicker}
				placeholder={__('Add Kicker', 'eyecatcher')}
				tagName="h2"
				allowedFormats={['core/bold']}
				style={{ color: kickerTextColor, backgroundColor: kickerBackgroundColor }}
				characterLimit={20}
			/>
			<LimitRichText
				{...useBlockProps}
				className='headline'
				onChange={(value) => setAttributes({ headline: value })}
				value={headline}
				placeholder={__('Add Headline', 'eyecatcher')}
				tagName="h1"
				allowedFormats={['core/bold']}
				style={{ color: headlineTextColor }}
				characterLimit={80}
			/>
			<LimitRichText
				{...useBlockProps}
				className='subdeck'
				onChange={(value) => setAttributes({ subdeck: value })}
				value={subdeck}
				placeholder={__('Add Subdeck', 'eyecatcher')}
				tagName="p"
				allowedFormats={['core/bold']}
				characterLimit={150}
			/>
		</div>
	);
}
