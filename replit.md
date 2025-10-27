# Construction Calculator

## Overview
An interactive construction calculator webpage built with HTML, CSS, JavaScript, and jQuery. The calculator helps users select construction options and displays pricing results.

## Project Structure
- `index.html` - Main HTML structure with 9 numbered sections plus results and cart
- `style.css` - Styling with white page background, light gray calculator container, dark sections with golden accents
- `script.js` - jQuery-based interactions for button toggles, spinners, and result display

## Design Features
- Page background: White (#ffffff)
- Calculator container: Light gray (#f5f5f5) at 66.66% width (2/3 of screen)
- Sections: Light gray background (#f5f5f5) matching outer container
- Interactive elements: Dark buttons/dropdowns (#2d2d2d, #4a4a4a) with golden accent color (#b8860b)
- Responsive design with mobile breakpoints

## Calculator Sections
### Part 1 (Sections 1-3)
- Installation type selection
- Structure type dropdown
- Base type selection with joist size

### Part 2 (Sections 4-6)
- Dimension inputs with unit toggles (metres/feet/inches)
- Additional loads selection
- Ground screw selection

### Part 3 (Sections 7-8)
- Securing bracket selection
- Installation tool options (4 buttons)

### Part 4 (Section 9 + Calculate)
- Additional items checkboxes
- Calculate button

### Part 5 (Results Section)
- Hidden by default
- Displays when Calculate is clicked
- Shows structure details, dimensions, and specifications

### Part 6 (Cart Section)
- Hidden by default
- Displays when Calculate is clicked
- Shows product listing with pricing and action buttons

## Interactions
- Button selections toggle active state (golden highlight)
- Number spinners increment/decrement values
- Calculate button reveals results and cart sections with smooth animation
- Auto-scroll to results after calculation

## Recent Changes
- 2025-10-27: Initial creation of calculator with all 6 parts matching design screenshots
- Implemented jQuery for interactive elements
- Added subsection dividers to visually separate grouped sections
- Updated section backgrounds to light gray (#f5f5f5) to match outer container
- Adjusted text colors to dark (#2d2d2d) for proper contrast on light background
- Added 1px separating lines between major sections for clear visual organization
