<?php

/**
 * Register meta boxes.
 */
function mortgage_tenant_meta_box()
{
    add_meta_box('hcf-1', __('Mark as Thank You Page (Mortgage Tenant)', 'hcf'), 'mortgage_tenant_callback', 'page');
}
add_action('add_meta_boxes', 'mortgage_tenant_meta_box');

/**
 * Meta box display callback.
 *
 * @param WP_Post $post Current post object.
 */
function mortgage_tenant_callback($post)
{
    include plugin_dir_path(__FILE__) . './form.php';
}

/**
 * Save meta box content.
 *
 * @param int $post_id Post ID
 */
function mortgage_tenant_save_meta_box($post_id)
{
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if ($parent_id = wp_is_post_revision($post_id)) {
        $post_id = $parent_id;
    }
    $fields = [
        'is_thank_you_page',
    ];
    foreach ($fields as $field) {
        if (array_key_exists($field, $_POST)) {
            update_post_meta($post_id, $field, sanitize_text_field($_POST[$field]));
        }
    }
}
add_action('save_post', 'mortgage_tenant_save_meta_box');