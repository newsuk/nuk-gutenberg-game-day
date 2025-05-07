<?php
/**
 * Plugin Name:       Gutenberg Game Day
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenberg-game-day
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
 */
function create_block_gutenberg_game_day_block_init() {
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` file.
	 * Added to WordPress 6.7 to improve the performance of block type registration.
	 *
	 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
	 */
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
	/**
	 * Registers the block type(s) in the `blocks-manifest.php` file.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'create_block_gutenberg_game_day_block_init' );


function q_and_a_post_type() {
	$args = array(
		'labels' => array(
			'name' => __('Quizle Questions'),
			'singular_name' => __('Quizle Question'),
		),
		'template' => array( array( 'create-block/gutenberg-game-day' ) ),
		'public' => true,
		'has_archive' => true,
		'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments', 'custom-fields'),
		'show_in_rest' => true, // Enable Gutenberg support
	);
	register_post_type('q-and-a-post-type', $args);

	register_post_meta(
		'q-and-a-post-type',
		'question',
		array(
			'single'       => true,
			'type'         => 'string',
			'show_in_rest' => true
		)
	);
	register_post_meta(
		'q-and-a-post-type',
		'solution',
		array(
			'single'       => true,
			'type'         => 'string',
			'show_in_rest' => true
		)
	);
	register_post_meta(
		'q-and-a-post-type',
		'alternateSolutions',
		array(
			'single'       => true,
			'type'         => 'array',
			'show_in_rest' => array(
				'schema' => array(
					'type'  => 'array',
					'items' => array(
					'type' => 'string',
					),
				),
			),
		)
	);
	register_post_meta(
		'q-and-a-post-type',
		'hints',
		array(
			'single'       => true,
			'type'         => 'array',
			'show_in_rest' => array(
				'schema' => array(
					'type'  => 'array',
					'items' => array(
						'type' => 'string',
					),
				),
			),
		)
);

}
add_action('init', 'q_and_a_post_type');
