import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
import './editor.scss';

const Edit = ({ attributes, setAttributes }) => {
    const { kicker, headline, subdeck, kickerBackgroundColor, headlineTextColor } = attributes;

    const onChangeKicker = (value) => {
        setAttributes({ kicker: value });
    };

    const onChangeHeadline = (value) => {
        setAttributes({ headline: value });
    };

    const onChangeSubdeck = (value) => {
        setAttributes({ subdeck: value });
    };

    const onChangeKickerBackgroundColor = (value) => {
        setAttributes({ kickerBackgroundColor: value });
    };

    const onChangeHeadlineTextColor = (value) => {
        setAttributes({ headlineTextColor: value });
    };

    return (
        <div {...useBlockProps()}>
            <InspectorControls>
                <PanelBody title={__('Color Settings', 'funky-headline')}>
                    <div>
                        <strong>{__('Kicker Background Color', 'funky-headline')}</strong>
                        <ColorPalette
                            value={kickerBackgroundColor}
                            onChange={onChangeKickerBackgroundColor}
                        />
                    </div>
                    <div>
                        <strong>{__('Headline Text Color', 'funky-headline')}</strong>
                        <ColorPalette
                            value={headlineTextColor}
                            onChange={onChangeHeadlineTextColor}
                        />
                    </div>
                </PanelBody>
            </InspectorControls>
            <RichText
                tagName="div"
                className="kicker"
                placeholder={__('Kicker', 'funky-headline')}
                value={kicker}
                onChange={onChangeKicker}
                style={{ backgroundColor: kickerBackgroundColor }}
                maxLength="20"
            />
            <RichText
                tagName="h2"
                className="headline"
                placeholder={__('Headline', 'funky-headline')}
                value={headline}
                onChange={onChangeHeadline}
                style={{ color: headlineTextColor }}
                maxLength="80"
            />
            <RichText
                tagName="p"
                className="subdeck"
                placeholder={__('Subdeck', 'funky-headline')}
                value={subdeck}
                onChange={onChangeSubdeck}
                maxLength="150"
            />
        </div>
    );
};

export default Edit;