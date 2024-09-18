/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useInnerBlocksProps,
	InspectorControls,
	useBlockProps,
	store as blockEditorStore,
} from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";

import { ToggleControl, PanelRow, PanelBody } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit(props) {
	console.log(props);
	const { attributes, setAttributes, clientId } = props;
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [["create-block/times-quiz-question", {}]],
	});

	const block = useSelect((select) =>
		select(blockEditorStore).getBlock(clientId),
	);

	console.log(block);

	return (
		<div {...blockProps}>
			<InspectorControls key="setting">
				<PanelBody title="Settings">
					<PanelRow>
						<ToggleControl
							checked={attributes.label}
							label="Show Labels"
							onChange={() => setAttributes({ label: !attributes.label })}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div {...innerBlocksProps}></div>
			<div style={{ textAlign: "center" }}>
				<p>You scored 0 out of {block.innerBlocks.length}</p>
			</div>
		</div>
	);
}
