<?php
/**
 * Plugin Name:       Funky-header
 * Description:       Team5 funky header
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       funky-header-team5
 *
 * @package FunkyHeaderTeam5
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
function funky_header_team5_funky_header_team5_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'funky_header_team5_funky_header_team5_block_init' );
