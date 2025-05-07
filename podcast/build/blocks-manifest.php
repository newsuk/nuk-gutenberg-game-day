<?php
// This file is generated. Do not modify it manually.
return array(
	'podcast' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/podcast',
		'version' => '0.1.0',
		'title' => 'Podcast',
		'category' => 'widgets',
		'icon' => 'megaphone',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'text' => true,
				'gradients' => true
			),
			'shadow' => true,
			'align' => array(
				'full',
				'wide'
			),
			'border' => array(
				'radius' => true
			)
		),
		'textdomain' => 'podcast',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'podcastSeries' => array(
				'type' => 'string',
				'default' => 'The Story',
				'enum' => array(
					'The Story',
					'The Royals with Roya and Kate',
					'How to win an election',
					'Politics Unpacked',
					'Your History',
					'Off Air with Jane & Fi',
					'Times news briefing',
					'World in 10'
				)
			),
			'podcastTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'podcastSummary' => array(
				'type' => 'string',
				'default' => ''
			),
			'podcastAudioUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'podcastImageUrl' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	)
);
