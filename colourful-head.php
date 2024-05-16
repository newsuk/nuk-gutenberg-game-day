<?php
/**
 * Plugin Name:       Colourful Headline
 * Description:       Headline block with colours
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       colourful-head
 *
 * @package ColourfulHead
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function colourful_head_colourful_head_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'colourful_head_colourful_head_block_init' );

function register_meta_for_colourful_title_block() {
	register_meta( 'post', 'colourful_title_meta', array(
		'auth_callback' 		=> 'is_user_logged_in',
		'type'          		=> 'string',
		'single'        		=> true,
		'show_in_rest'  		=> true,
		'sanitize_callback'  	=> 'wp_kses_post',
	) );
}

add_action( 'init', 'register_meta_for_colourful_title_block' );
