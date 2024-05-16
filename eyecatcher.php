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

/**
 * Make eyecatcher block as default.
 */
function eyecatcher_register_template() {
    $post_type_object = get_post_type_object( 'post' );
    $post_type_object->template = array(
        array( 'blocks-course/eyecatcher' ),
    );
}
add_action( 'init', 'eyecatcher_register_template' );
