<?php

/**
 
 * @package ReaLStateTenantSurvey
 
 */

/*
 
Plugin Name: Real State Tenant Survey
 
Plugin URI: http://saniulahsan.info/
 
Description: Create Survey for tenant in real state business and update to server
 
Version: 1.0.0
 
Author: Saniul Ahsan
 
Author URI: http://saniulahsan.info/
 
License: GPLv2 or later
 
Text Domain: ReaLStateTenantSurvey
 
*/

defined('ABSPATH') or die('No script kiddies please!');


function add_async_attribute($tag, $handle)
{
	if ('tenant-script-runtime' === $handle) {
		return str_replace(' src', ' defer="defer" async="async" src', $tag);
	}

	if ('tenant-script-polyfills' === $handle) {
		return str_replace(' src', ' defer="defer" async="async" src', $tag);
	}
	if ('tenant-script-main' === $handle) {
		return str_replace(' src', ' defer="defer" async="async" src', $tag);
	}
	return $tag;
}
add_filter('script_loader_tag', 'add_async_attribute', 10, 2);


function add_tenant_theme_scripts()
{
	$assetsPath = plugin_dir_url(__FILE__);
	wp_enqueue_style('tenant-font-css', 'https://fonts.googleapis.com/css?family=Montserrat');
	wp_enqueue_style('tenant-css', $assetsPath . 'dist/real-state-tenant-survey/styles.css');

	wp_enqueue_script('tenant-script-runtime', $assetsPath . 'dist/real-state-tenant-survey/runtime.js', array(), '', true);
	wp_enqueue_script('tenant-script-polyfills', $assetsPath . 'dist/real-state-tenant-survey/polyfills.js', array(), '', true);
	wp_enqueue_script('tenant-script-main', $assetsPath . 'dist/real-state-tenant-survey/main.js', array(), '', true);
}
add_action('wp_enqueue_scripts', 'add_tenant_theme_scripts');

function real_state_tenant_form()
{
	return '<section class="real-state-tenant-survey">
				<app-root></app-root>
			</section>';
}
add_shortcode('real-state-tenant-survey', 'real_state_tenant_form');

include_once plugin_dir_path(__FILE__)  . 'settings.php';
include_once plugin_dir_path(__FILE__)  . 'api.php';
include_once plugin_dir_path(__FILE__)  . 'metabox.php';