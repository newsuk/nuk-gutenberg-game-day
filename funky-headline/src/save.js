import { useBlockProps, RichText } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { kicker, headline, subdeck, kickerBackgroundColor, headlineTextColor } = attributes;
    return (
        <div {...useBlockProps.save()}>
            <RichText.Content
                tagName="div"
                className="kicker"
                value={kicker}
                style={{ backgroundColor: kickerBackgroundColor }}
            />
            <RichText.Content
                tagName="h2"
                className="headline"
                value={headline}
                style={{ color: headlineTextColor }}
            />
            <RichText.Content
                tagName="p"
                className="subdeck"
                value={subdeck}
            />
        </div>
    );
};

export default Save;