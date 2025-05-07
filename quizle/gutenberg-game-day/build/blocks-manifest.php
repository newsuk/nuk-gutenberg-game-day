<?php
// This file is generated. Do not modify it manually.
return array(
	'gutenberg-game-day' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/gutenberg-game-day',
		'version' => '0.1.0',
		'title' => 'Quizle',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Quizle description',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'quizle',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'quizle' => array(
				'type' => 'object',
				'default' => array(
					'questions' => array(
						array(
							'question' => 'What is the capital of France?',
							'options' => array(
								'Paris',
								'London',
								'Berlin',
								'Madrid'
							),
							'answer' => 0
						)
					)
				)
			),
			'quizleId' => array(
				'type' => 'string'
			),
			'question' => array(
				'type' => 'string',
				'default' => 'Which landlocked Balkan state uses the Euro despite not being an EU member? '
			),
			'solution' => array(
				'type' => 'string',
				'default' => 'Kosovo'
			),
			'alternateSolutions' => array(
				'type' => 'string',
				'default' => 'Kosova|Republic of Kosovo|Kossovo|Cosovo'
			),
			'hints' => array(
				'type' => 'array',
				'default' => array(
					'Its name derives from a term for "Blackbird Field", the site of a 1389 battle between Serbia and the Ottoman Empire',
					'Its population is mainly ethnic Albanian and overwhelmingly Muslim',
					'Its independence, declared in 2008, is recognised by around half of the UN\'s member states',
					'Singers Rita Ora and Dua Lipa and footballer Xherdan Shaqiri are members of its diaspora'
				)
			)
		)
	)
);
