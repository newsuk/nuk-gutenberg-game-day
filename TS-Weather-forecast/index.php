<?php
/**
 * Plugin Name: TS Weather Forecast
 * Description: A Gutenberg block to display real-time weather updates for a given city and date.
 * Version: 1.0.0
 * Author: NUK Bengaluru Team
 * Author URI: https://www.news.co.uk/
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 */

define( 'TS_WEATHER_FORECAST_BLOCK_VERSION', '1.0.0' );

// Register the block
function ts_weather_forecast_register_block() {
	wp_register_script(
		'ts-weather-forecast-block',
		plugins_url( 'dist/block.js', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor' ),
		TS_WEATHER_FORECAST_BLOCK_VERSION
	);

	wp_register_style(
		'ts-weather-forecast-block-style',
		plugins_url( 'src/style.css', __FILE__ ),
		array(),
		TS_WEATHER_FORECAST_BLOCK_VERSION
	);

	register_block_type('ts-weather-forecast/block', array(
		'editor_script' => 'ts-weather-forecast-block',
		'style' => 'ts-weather-forecast-block-style',
	));
}
add_action('init', 'ts_weather_forecast_register_block');

/**
 * Registers a custom REST API endpoint to fetch weather data.
 *
 * @return void
 */
function ts_weather_forecast_api() {
	register_rest_route('ts-weather-forecast/v1', '/weather', array(
		'methods' => 'GET',
		'callback' => 'ts_weather_forecast_get_weather',
		'permission_callback' => '__return_true',
	));
}
add_action('rest_api_init', 'ts_weather_forecast_api');

/**
 * Retrieves the weather forecast for a specific city and date.
 *
 * @param WP_REST_Request $request The REST API request object containing the parameters.
 * 
 * @return array|WP_Error The weather forecast data for the specified date,
 * or a WP_Error object if the API request fails.
 */
function ts_weather_forecast_get_weather( $request ) {
	$city = sanitize_text_field( $request->get_param( 'city' ) );
	$date = sanitize_text_field( $request->get_param( 'date' ) );
	$api_key = '54f9e00fb0c4728472a7cef3475ae9d2';

	// Convert date to timestamp
	$timestamp = strtotime( $date );

	// Use the timestamp to get the weather forecast for the specific date
	$response = wp_remote_get( "http://api.openweathermap.org/data/2.5/forecast?q={$city}&appid={$api_key}&units=metric" );

	if ( is_wp_error( $response ) ) {
		return new WP_Error( 'api_error', 'Unable to fetch weather data', array( 'status' => 500 ) );
	}

	$body = wp_remote_retrieve_body( $response );
	$data = json_decode( $body, true );

	// Find the forecast closest to the specified date
	$closest_forecast = null;
	foreach ( $data['list'] as $forecast ) {
		if ( abs( $forecast['dt'] - $timestamp ) < abs( $closest_forecast['dt'] - $timestamp ) ) {
			$closest_forecast = $forecast;
		}
	}

	return $closest_forecast;
}
