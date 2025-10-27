<?php
/**
 * Plugin Name: Construction Calculator
 * Plugin URI: https://yourwebsite.com/construction-calculator
 * Description: An interactive construction calculator for ground screw installations. Use shortcode [construction_calculator] to display.
 * Version: 1.0.0
 * Author: Your Name
 * Author URI: https://yourwebsite.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: construction-calculator
 */

if (!defined('ABSPATH')) {
    exit;
}

class Construction_Calculator {
    
    private static $instance = null;
    
    public static function get_instance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    private function __construct() {
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_shortcode('construction_calculator', array($this, 'render_calculator'));
    }
    
    public function enqueue_scripts() {
        if (!is_singular() || !has_shortcode(get_post()->post_content, 'construction_calculator')) {
            return;
        }
        
        wp_enqueue_script('jquery');
        
        wp_enqueue_style(
            'construction-calculator-style',
            plugin_dir_url(__FILE__) . 'assets/style.css',
            array(),
            '1.0.0'
        );
        
        wp_enqueue_script(
            'construction-calculator-script',
            plugin_dir_url(__FILE__) . 'assets/script.js',
            array('jquery'),
            '1.0.0',
            true
        );
    }
    
    public function render_calculator() {
        ob_start();
        include plugin_dir_path(__FILE__) . 'templates/calculator-template.php';
        return ob_get_clean();
    }
}

Construction_Calculator::get_instance();
