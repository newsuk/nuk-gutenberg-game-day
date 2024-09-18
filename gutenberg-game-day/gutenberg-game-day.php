<?php
/**
 * Plugin Name:       Gutenberg Game Day
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.0
 * Version:           0.1.0
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
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_gutenberg_game_day_block_init() {
	register_block_type( __DIR__ . '/build/block' );
}
add_action( 'init', 'create_block_gutenberg_game_day_block_init' );

function sidebar_plugin_register() {
	$assets = require_once( __DIR__ . '/build/sidebar/sidebar.asset.php' );

	wp_enqueue_script(
		'ggd-sidebar-index',
		plugins_url( 'build/sidebar/sidebar.js', __FILE__ ),
		$assets['dependencies'],
		$assets['version']
    );
}
add_action( 'enqueue_block_editor_assets', 'sidebar_plugin_register' );

function ggd_register_patterns() {
	register_block_pattern(
        'slices/lead-story-module-2-10',
        array(
            'title'      => __( 'Lead Story Module 2-10', 'slices' ),
            'blockTypes' => array( 'core/paragraph', 'core/heading' ),
            'content'    => '<!-- wp:columns -->
                             <div class="wp-block-columns"><!-- wp:column {"width":"66.66%"} -->
                             <div class="wp-block-column" style="flex-basis:66.66%"><!-- wp:create-block/gutenberg-game-day -->
                             <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                             <!-- /wp:create-block/gutenberg-game-day -->

                             <!-- wp:columns -->
                             <div class="wp-block-columns"><!-- wp:column -->
                             <div class="wp-block-column"><!-- wp:create-block/gutenberg-game-day -->
                             <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                             <!-- /wp:create-block/gutenberg-game-day -->

                             <!-- wp:create-block/gutenberg-game-day -->
                             <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                             <!-- /wp:create-block/gutenberg-game-day --></div>
                             <!-- /wp:column -->

                             <!-- wp:column -->
                             <div class="wp-block-column"><!-- wp:create-block/gutenberg-game-day -->
                             <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                             <!-- /wp:create-block/gutenberg-game-day --></div>
                             <!-- /wp:column -->

                             <!-- wp:column -->
                             <div class="wp-block-column"><!-- wp:create-block/gutenberg-game-day -->
                             <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                             <!-- /wp:create-block/gutenberg-game-day --></div>
                             <!-- /wp:column --></div>
                             <!-- /wp:columns --></div>
                             <!-- /wp:column -->

                             <!-- wp:column {"width":"33.33%"} -->
                             <div class="wp-block-column" style="flex-basis:33.33%"><!-- wp:create-block/gutenberg-game-day -->
                             <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                             <!-- /wp:create-block/gutenberg-game-day -->

                             <!-- wp:create-block/gutenberg-game-day -->
                             <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                             <!-- /wp:create-block/gutenberg-game-day -->

                             <!-- wp:create-block/gutenberg-game-day -->
                             <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                             <!-- /wp:create-block/gutenberg-game-day -->

                             <!-- wp:create-block/gutenberg-game-day -->
                             <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                             <!-- /wp:create-block/gutenberg-game-day -->

                             <!-- wp:create-block/gutenberg-game-day -->
                             <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                             <!-- /wp:create-block/gutenberg-game-day --></div>
                             <!-- /wp:column --></div>
                             <!-- /wp:columns -->',
        )
    );

     register_block_pattern(
                'slices/content-bucket-2-4',
                array(
                    'title'      => __( 'Content Bucket 2-4', 'slices' ),
                    'blockTypes' => array( 'core/paragraph', 'core/heading' ),
                    'content'    => '<!-- wp:columns -->
                                     <div class="wp-block-columns"><!-- wp:column -->
                                     <div class="wp-block-column"><!-- wp:columns -->
                                     <div class="wp-block-columns"><!-- wp:column -->
                                     <div class="wp-block-column"><!-- wp:create-block/gutenberg-game-day -->
                                     <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                                     <!-- /wp:create-block/gutenberg-game-day --></div>
                                     <!-- /wp:column -->

                                     <!-- wp:column -->
                                     <div class="wp-block-column"><!-- wp:create-block/gutenberg-game-day -->
                                     <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                                     <!-- /wp:create-block/gutenberg-game-day --></div>
                                     <!-- /wp:column --></div>
                                     <!-- /wp:columns --></div>
                                     <!-- /wp:column -->

                                     <!-- wp:column -->
                                     <div class="wp-block-column"><!-- wp:columns -->
                                     <div class="wp-block-columns"><!-- wp:column -->
                                     <div class="wp-block-column"><!-- wp:create-block/gutenberg-game-day -->
                                     <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                                     <!-- /wp:create-block/gutenberg-game-day --></div>
                                     <!-- /wp:column -->

                                     <!-- wp:column -->
                                     <div class="wp-block-column"><!-- wp:create-block/gutenberg-game-day -->
                                     <p class="wp-block-create-block-gutenberg-game-day">Gutenberg Game Day – hello from the saved content!</p>
                                     <!-- /wp:create-block/gutenberg-game-day --></div>
                                     <!-- /wp:column --></div>
                                     <!-- /wp:columns --></div>
                                     <!-- /wp:column --></div>
                                     <!-- /wp:columns -->',
					)
				);
}
add_action( 'init', 'ggd_register_patterns' );

