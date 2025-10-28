# Construction Calculator WordPress Plugin

## Overview
A professional WordPress plugin that provides an interactive construction calculator for ground screw installations. The calculator helps users calculate requirements, pricing, and installation details directly on any WordPress site using a simple shortcode.

## Project Type
WordPress Plugin (PHP, JavaScript, CSS)

## Current Status
Fully functional WordPress plugin ready for installation on any WordPress site (v5.0+).

## Project Structure
```
construction-calculator/          # Main plugin folder
├── construction-calculator.php   # Main plugin file with shortcode registration
├── README.md                     # Complete installation and usage documentation
├── assets/                       # CSS and JavaScript assets
│   ├── style.css                # Calculator styling
│   └── script.js                # jQuery-based interactions
└── templates/                    # PHP template files
    └── calculator-template.php  # Calculator HTML output

index.html                        # Plugin information page (for Replit display)
replit.md                        # This file
attached_assets/                 # Design reference images
```

## Installation on WordPress

### Quick Start
1. Download the `construction-calculator` folder
2. Upload to WordPress at `wp-content/plugins/`
3. Activate in WordPress Admin → Plugins
4. Use shortcode `[construction_calculator]` on any page/post

### Detailed Instructions
See `construction-calculator/README.md` for complete installation guide.

## Features

### Calculator Sections
1. **Installation Type** - DIY, Trade, or Ground Screw Centre installation
2. **Structure Type** - Garden Room, Gazebo, Carport, or Shed
3. **Base Type** - Joist or SIPS with size selection
4. **Dimensions** - Width and length input with meters/feet/inches
5. **Additional Loads** - Hot tubs, pool tables, gym equipment, etc.
6. **Ground Screw Selection** - Standard, Heavy Duty, or Premium
7. **Securing Brackets** - Standard, Premium, or Heavy Duty systems
8. **Installation Tools** - Manual, Professional, or Hire options
9. **Additional Items** - Accessories and supplementary products

### Output Displays
- **Results Section** - Shows calculated specifications, dimensions, and load capacities
- **Cart Section** - Displays product pricing and cart actions

## Technical Details

### Plugin Architecture
- **Main File**: `construction-calculator.php` registers the shortcode and enqueues assets
- **Shortcode**: `[construction_calculator]` outputs the calculator on any page
- **Template System**: Uses PHP templates for clean separation of concerns
- **Asset Loading**: Conditional loading only when shortcode is present on page

### Styling
- Color scheme: Golden accent (#b8860b) with dark elements (#2d2d2d, #4a4a4a)
- Responsive design with mobile breakpoints at 968px
- Clean, professional interface matching original design
- Light gray backgrounds (#f5f5f5) with proper contrast

### JavaScript Functionality
- jQuery-based interactions (WordPress includes jQuery by default)
- Button toggle states for option selection
- Number spinner controls for dimension inputs
- Smooth animations for results display
- Auto-scroll to results after calculation

## Requirements
- **WordPress**: 5.0 or higher
- **PHP**: 7.0 or higher
- **jQuery**: Included with WordPress (no additional setup needed)

## Usage Examples

### Basic Usage
```php
// In any WordPress page or post, add:
[construction_calculator]
```

### In PHP Template
```php
<?php echo do_shortcode('[construction_calculator]'); ?>
```

### In Widget (Classic Widgets)
Add the shortcode `[construction_calculator]` to a Text widget

## Development Notes

### Converting from Standalone HTML
This plugin was converted from a standalone HTML/CSS/JavaScript calculator to a WordPress plugin format:
- Standalone files removed: `index.html`, `style.css`, `script.js`
- Assets moved to plugin structure in `assets/` directory
- HTML converted to PHP template in `templates/` directory
- WordPress plugin architecture implemented with proper hooks

### Plugin Hooks Used
- `wp_enqueue_scripts` - For conditional asset loading
- `add_shortcode` - For registering the calculator shortcode

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile and tablet devices
- IE11+ (due to CSS Grid usage)

## Replit Environment Setup

This project runs in Replit as a static website serving demonstration pages.

### Running Locally in Replit
- **Server**: Python 3.11 HTTP server on port 5000
- **Pages Available**:
  - `/` or `/index.html` - Plugin information and documentation
  - `/demo.html` - Live interactive demo of the calculator
- **Auto-reload**: Server includes cache-control headers for instant updates

### Files for Replit
- `server.py` - Simple Python HTTP server serving static files
- `demo.html` - Standalone demo of the calculator functionality
- `index.html` - Plugin documentation page

## Recent Changes
- **2025-10-28**: Initial Replit environment setup
  - Configured Python 3.11 HTTP server on port 5000
  - Set up workflow for automatic server startup
  - Added cache-control headers for proper file serving
  - Updated .gitignore for Python files
  - Project ready to view in Replit webview

## Support & Documentation
For complete documentation, see `construction-calculator/README.md`

## License
GPL v2 or later (compatible with WordPress)
