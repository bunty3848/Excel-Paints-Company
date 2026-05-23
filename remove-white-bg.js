/**
 * Script to Remove White Backgrounds from Product Images
 * 
 * This script processes all product images and removes white backgrounds,
 * making them transparent so they blend perfectly with any colored background.
 * 
 * Usage:
 * 1. Make sure you have the images in public/images/
 * 2. Run: node remove-white-bg.js
 * 3. The script will create new transparent versions
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToProcess = [
  'Excel_Cem.png',
  'Excel_Wall_Putty.png',
  'Excel_White_Cement.png'
];

const inputDir = path.join(__dirname, 'public', 'images');
const outputDir = path.join(__dirname, 'public', 'images', 'transparent');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function removeWhiteBackground(imageName) {
  const inputPath = path.join(inputDir, imageName);
  const outputPath = path.join(outputDir, imageName);

  try {
    console.log(`Processing: ${imageName}...`);
    
    await sharp(inputPath)
      .flatten({ background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toColorspace('srgb')
      .toFile(outputPath);
    
    console.log(`✓ Created transparent version: ${outputPath}`);
  } catch (error) {
    console.error(`✗ Error processing ${imageName}:`, error.message);
  }
}

async function processAllImages() {
  console.log('\n🎨 Starting white background removal...\n');
  
  for (const imageName of imagesToProcess) {
    await removeWhiteBackground(imageName);
  }
  
  console.log('\n✅ All images processed!');
  console.log(`📁 Transparent images saved to: ${outputDir}`);
  console.log('\nNext steps:');
  console.log('1. Check the transparent versions in public/images/transparent/');
  console.log('2. If they look good, replace the original images');
  console.log('3. Or update image paths in the code to use the transparent folder\n');
}

// Run the script
processAllImages().catch(console.error);
