<?php

/**
 * Plugin Name:       Convert SideBar To NavBar
 * Plugin URI:        https://easyapp24.com/
 * Description:       This plugin for convert sidebar to navbar dashboard admin.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.4.26
 * Author:            EasyApp24
 * Author URI:        https://easyapp24.com/
 */
if (!defined('ABSPATH')) {
    exit;
}


class ConvertSideBar
{

    function  __construct()
    {
        // add_action('init',array($this,'customize_post_type'));
    }

    // register style and script
    function register()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueue_style_script'));
    }


    // when activate pulgin
    function activate()
    {
        $this->register();
        //  flush_rewrite_rules();
    }

    // when deactivate pulgin
    function deactivate()
    {
        flush_rewrite_rules();
    }

    function enqueue_style_script()
    {
        /* if (is_front_page() || is_single()) {
        wp_enqueue_script('jquery');
        wp_deregister_script('jquery');
        wp_register_script('jquery', includes_url('/js/jquery/jquery.min.js'), [], false, true);
   //  }*/
        wp_enqueue_style('css', plugins_url('css/style.css?time='.time().'', __FILE__));
        wp_enqueue_script('js', plugins_url('js/script.js?time='.time().'', __FILE__));
    }
}
if (class_exists('ConvertSideBar')) {
    $navbar = new ConvertSideBar();
    register_activation_hook('__FILE__', $navbar->activate());
    register_deactivation_hook('__FILE__', $navbar->deactivate());
}
