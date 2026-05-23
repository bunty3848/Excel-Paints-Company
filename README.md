# Excel Paints Company Website

A modern, vibrant, and fully responsive website for Excel Paints Company - a leading manufacturer of wall putty, decorative white cement, and cement paints based in Patna, Bihar.

## 🎨 Features

- ✅ **Fully Responsive** - Works perfectly on all devices (mobile, tablet, desktop)
- ✅ **Modern Design** - Vibrant colors with smooth animations and transitions
- ✅ **Fast Loading** - Optimized for performance with Vite
- ✅ **SEO Optimized** - Meta tags, Open Graph, and structured data
- ✅ **5 Pages** - Home, About, Products, Gallery, Contact
- ✅ **Contact Form** - Form validation with React Hook Form
- ✅ **Product Showcase** - Detailed product pages with specifications
- ✅ **Image Gallery** - Lightbox gallery with navigation
- ✅ **Smooth Animations** - Framer Motion for delightful interactions

## 🛠️ Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Forms:** React Hook Form
- **SEO:** React Helmet Async
- **Icons:** React Icons + Lucide React
- **Animations:** Framer Motion

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd excel-paints-website
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

### 2. Add Product Images

Place the following images in the `public/images/` directory:

- `Excel_Cem.png` - Cement paint product image
- `Excel_Wall_Putty.png` - Wall putty product image
- `Excel_White_Cement.png` - White cement product image
- `Logo.jpg` - Company logo

### 3. Start Development Server

```bash
npm run dev
```

The website will open at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
excel-paints-website/
├── public/
│   └── images/              # Product images go here
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Footer.jsx       # Site footer
│   │   └── SEO.jsx          # SEO meta tags
│   ├── data/                # Data files
│   │   ├── products.js      # Product information
│   │   └── companyInfo.js   # Company details
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing page
│   │   ├── About.jsx        # About us page
│   │   ├── Products.jsx     # Products page
│   │   ├── Gallery.jsx      # Image gallery
│   │   └── Contact.jsx      # Contact form
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── README.md                # This file
```

## 🎨 Customization

### Update Company Information

Edit `src/data/companyInfo.js` to update:
- Company name, tagline, contact details
- Social media links
- Mission, vision, values
- "Why Choose Us" section

### Update Products

Edit `src/data/products.js` to:
- Add/remove products
- Update product descriptions, features, specifications
- Change product images

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { ... },    // Main brand color
  accent: { ... },     // Accent colors
  // Add your custom colors
}
```

### Add/Remove Pages

1. Create a new page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. **Create Account** at [netlify.com](https://netlify.com)
2. **Connect Repository** or drag & drop the `dist` folder
3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy!**

### Option 2: Vercel

1. **Create Account** at [vercel.com](https://vercel.com)
2. **Import Project** from Git repository
3. **Deploy** - automatic configuration for Vite

### Option 3: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.js`:
   ```javascript
   base: '/repository-name/'
   ```
4. Deploy: `npm run deploy`

### Option 4: Traditional Hosting (cPanel, etc.)

1. Build the project: `npm run build`
2. Upload the entire `dist` folder to your hosting
3. Point your domain to the uploaded folder

## 🔧 Configuration

### Email Form Integration

To enable the contact form to send emails:

1. **Using EmailJS** (Free tier available):
   ```bash
   npm install @emailjs/browser
   ```
   
2. Update `src/pages/Contact.jsx`:
   ```javascript
   import emailjs from '@emailjs/browser';
   
   const onSubmit = (data) => {
     emailjs.send(
       'YOUR_SERVICE_ID',
       'YOUR_TEMPLATE_ID',
       data,
       'YOUR_PUBLIC_KEY'
     ).then(...);
   };
   ```

3. Get credentials from [emailjs.com](https://www.emailjs.com/)

### Google Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Optimization

- Images are lazy-loaded
- Code splitting by route
- Minified CSS and JavaScript
- Gzip compression ready
- Optimized bundle size

## 🐛 Troubleshooting

### Issue: Images not showing

**Solution:** Ensure images are placed in `public/images/` directory with correct names.

### Issue: Build fails

**Solution:** 
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run build
```

### Issue: Port already in use

**Solution:** Use a different port:
```bash
npm run dev -- --port 3000
```

## 📞 Support

For issues or questions:
- Email: excelpaintscompany@gmail.com
- Phone: +919798081022

## 📄 License

© 2024 Excel Paints Company. All rights reserved.

## 🙏 Credits

Built with:
- React
- Vite
- Tailwind CSS
- React Router
- Framer Motion

---

**Made with ❤️ for Excel Paints Company**
