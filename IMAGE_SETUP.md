# Image Setup Instructions

## Required Images

You need to add the following 4 images to the `public/images/` directory:

### Product Images:
1. **Excel_Cem.png** - Cement paint product bag
2. **Excel_Wall_Putty.png** - Wall putty product bag  
3. **Excel_White_Cement.png** - White cement product bag
4. **Logo.jpg** - Company logo

## How to Add Images:

### Option 1: Manual Copy
1. Locate the 4 image files you uploaded
2. Copy them to: `excel-paints-website/public/images/`
3. Ensure the filenames match exactly (case-sensitive)

### Option 2: Download from This Chat
1. The images should be available in this conversation
2. Download each image
3. Place them in `excel-paints-website/public/images/`

## Image Specifications:

- **Format:** PNG for products, JPG for logo
- **Size:** Keep under 500KB for fast loading
- **Recommended dimensions:**
  - Product images: 800x800px minimum
  - Logo: 512x512px minimum

## Verify Images:

After adding images, your folder structure should look like:

```
excel-paints-website/
└── public/
    └── images/
        ├── Excel_Cem.png
        ├── Excel_Wall_Putty.png
        ├── Excel_White_Cement.png
        └── Logo.jpg
```

## Optional: Optimize Images

For better performance, you can optimize images:

```bash
# Install optimization tool
npm install -g sharp-cli

# Optimize images
sharp -i public/images/*.png -o public/images/ -f webp
```

This converts PNG to WebP format for smaller file sizes.
