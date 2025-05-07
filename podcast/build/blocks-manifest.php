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
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'podcast',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'podcastSeries' => array(
				'type' => 'array',
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
			'titleOverride' => array(
				'type' => 'string',
				'default' => ''
			),
			'summaryOverride' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	)
);
