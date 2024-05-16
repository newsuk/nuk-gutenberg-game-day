<?php
/**
 * Plugin Name: Eye Catcher
 * Plugin URI: https:google.com
 * Description: Edwil & Prem first eye catching block
 * Author: Edwil & Prem
 */

/**
 * Load the block definition file
 */
function load_eye_catcher() {
	register_block_type_from_metadata( __DIR__ );
}

add_action( "init", "load_eye_catcher" );
