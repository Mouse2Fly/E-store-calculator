## Installation

### Method 1: Upload via WordPress Admin

1. Download the `construction-calculator` folder as a ZIP file
2. Log in to your WordPress admin panel
3. Navigate to **Plugins > Add New**
4. Click **Upload Plugin**
5. Choose the ZIP file and click **Install Now**
6. Activate the plugin

### Method 2: FTP Upload

1. Download the `construction-calculator` folder
2. Upload it to your WordPress installation at `wp-content/plugins/`
3. Log in to your WordPress admin panel
4. Navigate to **Plugins**
5. Find "Construction Calculator" and click **Activate**

## Usage

Once activated, you can add the calculator to any page or post using the shortcode:

```
[construction_calculator]
```

### Example Usage

1. Create a new page: **Pages > Add New**
2. Add a title like "Ground Screw Calculator"
3. In the content area, add the shortcode: `[construction_calculator]`
4. Publish the page
5. Visit the page to see the calculator in action

## Customization

### Styling

The plugin comes with default styling in `assets/style.css`. To customize:

1. Copy the CSS to your theme's style.css
2. Modify as needed
3. The plugin uses these color schemes:
   - Primary accent: `#b8860b` (golden)
   - Dark elements: `#2d2d2d`, `#4a4a4a`
   - Light background: `#f5f5f5`

### Functionality

To modify calculator behavior, edit `assets/script.js`. The plugin uses jQuery for:
- Button selection toggles
- Number input spinners
- Calculate button functionality
- Results display animation

## Requirements

- WordPress 5.0 or higher
- PHP 7.0 or higher
- jQuery (included with WordPress)

## File Structure

```
construction-calculator/
├── construction-calculator.php    # Main plugin file
├── README.md                       # This file
├── assets/
│   ├── style.css                  # Plugin styles
│   └── script.js                  # Plugin JavaScript
└── templates/
    └── calculator-template.php    # Calculator HTML template
```
