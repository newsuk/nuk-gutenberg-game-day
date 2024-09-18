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

function create_block_gutenberg_game_day_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_gutenberg_game_day_block_init' );

/**
 * Register a custom REST API endpoint to fetch the RSS feed.
 */
add_action( 'rest_api_init', 'gutenberg_game_day_register_endpoint' );

function gutenberg_game_day_register_endpoint() {
	register_rest_route( 'gutenberg-game-day/v1', '/fetch-rss', array(
		'methods'             => 'GET',
		'callback'            => 'gutenberg_game_day_fetch_rss',
		'permission_callback' => '__return_true',
	) );
}

function gutenberg_game_day_fetch_rss( WP_REST_Request $request ) {
	$rss_url = $request->get_param( 'url' );

	// Validate and sanitize the URL
	$rss_url = esc_url_raw( $rss_url );

	if ( empty( $rss_url ) ) {
		return new WP_Error( 'no_url', 'No URL provided', array( 'status' => 400 ) );
	}

	// Fetch the RSS feed
	$response = wp_remote_get( $rss_url );

	if ( is_wp_error( $response ) ) {
		return new WP_Error( 'fetch_error', 'Error fetching the RSS feed', array( 'status' => 500 ) );
	}

	$body = wp_remote_retrieve_body( $response );

	// Return the raw XML with appropriate headers
	return new WP_REST_Response( $body, 200, array( 'Content-Type' => 'application/rss+xml' ) );
}
