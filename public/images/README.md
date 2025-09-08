# Images Directory

Add your images here with the following naming convention:

## Global Images
- `sdg-goals.png` - Sustainable Development Goals image (displayed below Projects subtitle)
- `world-map.png` - World map with visited countries highlighted in orange (for Travel section)

## Profile Picture
- `profile-pic.jpg` - Your professional headshot (recommended: 400x400px, square format)

## Project Images
- `prodata-preview.jpg` - PRODATA project preview image
- `water-inequality-preview.jpg` - Water inequality research preview
- `ba-program-preview.jpg` - British Airways program preview
- `attrition-preview.jpg` - Employee attrition prediction preview

## Achievement Gallery Images
Create these folders and add your images:

### Brazil (TETRIX Challenge)
- `brazil/brazil-1.jpg` - TETRIX Challenge photos
- `brazil/brazil-2.jpg` - Competition moments
- `brazil/brazil-3.jpg` - Team photos
- `brazil/brazil-4.jpg` - Event highlights

### Dubai (Young Economic Forum)
- `dubai/dubai-1.jpg` - Forum photos
- `dubai/dubai-2.jpg` - Networking moments
- `dubai/dubai-3.jpg` - Presentation photos
- `dubai/dubai-4.jpg` - Cultural experiences

### Cinema (Rural Mexico)
- `cinema/cinema-1.jpg` - Cinema setup
- `cinema/cinema-2.jpg` - Community events
- `cinema/cinema-3.jpg` - Audience photos
- `cinema/cinema-4.jpg` - Project impact

## Travel & Volunteering Images

### Countries Collage (2x8 Grid)
Create a `countries/` folder and add 16 images:
- `countries/country-1.jpg` - Mexico experiences
- `countries/country-2.jpg` - US business conferences
- `countries/country-3.jpg` - Guatemala cultural exchange
- `countries/country-4.jpg` - Costa Rica eco-tourism
- `countries/country-5.jpg` - Argentina academic exchange
- `countries/country-6.jpg` - Chile hostel experience
- `countries/country-7.jpg` - Brazil TETRIX Challenge
- `countries/country-8.jpg` - Paraguay development projects
- `countries/country-9.jpg` - Peru cultural heritage
- `countries/country-10.jpg` - Colombia social innovation
- `countries/country-11.jpg` - Germany Humboldt University
- `countries/country-12.jpg` - Denmark sustainability studies
- `countries/country-13.jpg` - Norway environmental projects
- `countries/country-14.jpg` - UK British Airways program
- `countries/country-15.jpg` - Netherlands innovation conferences
- `countries/country-16.jpg` - Belgium EU policy studies

### Legacy Travel Images (Optional)
- `volunteering-1.jpg` - India volunteering experience
- `volunteering-2.jpg` - Rural cinema initiative
- `travel-1.jpg` - Chile hostel experience
- `travel-2.jpg` - International hiking adventures
- `professional-1.jpg` - Young Economic Forum Dubai
- `competition-1.jpg` - TETRIX Challenge Brazil

## Image Requirements
- **Format**: JPG or PNG
- **Size**: 
  - Project images: 400x200px (2:1 ratio)
  - Profile picture: 400x400px (square format)
  - Other images: 800x600px or larger
- **Quality**: High resolution for best results
- **Optimization**: Compress images for web (use tools like TinyPNG)

## How to Add Images
1. Save your images in this directory with the exact filenames above
2. The website will automatically display them
3. If an image is missing, it will show a fallback (placeholder or emoji)

## Project URLs
Update the URLs in `src/components/Projects.jsx` to point to your actual project links:
- PRODATA: Update the URL in the projects array
- Water Inequality: Update the URL in the projects array
- British Airways: Update the URL in the projects array
- Employee Attrition: Update the URL in the projects array

## Alternative: Using CDN URLs
If you prefer to host images elsewhere, update the `src` attributes in the components to use your CDN URLs instead.
