# TrustNimport - Import/Export Business Website

A lightweight, responsive business website for an import-export company dealing in quality products worldwide.

## Website Features

### Pages Included
1. **Homepage (index.html)** - Professional landing page with featured products and company overview
2. **About Us (about.html)** - Company mission, values, and why customers should choose us
3. **Products (products.html)** - Detailed product information with specifications for all items
4. **Enquiry Form (enquiry.html)** - Functional contact form for customer inquiries
5. **Contact (contact.html)** - Company contact information, office locations, and business hours

### Products Showcased
- **Neem Oil** (Export) - Pure, pesticide-free agricultural solution
- **Coconut Shell Bowl** (Export) - Eco-friendly, handcrafted bowls
- **Calcium Fluoride** (Import) - Industrial-grade mineral
- **Organic Fabric** (Export) - Certified organic textiles
- **NPK Fertilizer** (Import) - Balanced nutrient formulation

## Design & Technology

### Color Palette
- **Primary Color**: Forest Green (#2d5016) - represents organic/natural products
- **Secondary Color**: Brown (#8b7355) - warm, earthy tone
- **Accent Color**: Tan/Gold (#c8a574) - professional highlight color
- **Background**: Cream (#f5f1ed) - light, natural feel

### Technologies Used
- **HTML5** - Semantic markup for SEO
- **CSS3** - Responsive, mobile-first design
- **Vanilla JavaScript** - Interactive features without heavy dependencies
- **No External Frameworks** - Lightweight and fast-loading

### Key Features
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
✅ **SEO Optimized** - Meta tags, semantic HTML, structured content
✅ **Fast Loading** - No heavy frameworks, optimized CSS/JS
✅ **Mobile Navigation** - Hamburger menu for small screens
✅ **Functional Enquiry Form** - Email integration, form validation
✅ **Professional UI** - Clean, modern design with smooth transitions
✅ **Accessibility** - Semantic HTML and proper contrast ratios
✅ **Cross-browser Compatible** - Works on all modern browsers

## File Structure

```
trustnimport/
├── index.html              # Homepage
├── about.html              # About page
├── products.html           # Products page
├── enquiry.html            # Enquiry form page
├── contact.html            # Contact information page
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
└── README.md               # This file
```

## How to Use

### Local Setup
1. Download all files to a folder
2. Open `index.html` in a web browser
3. Or use a local server: `python -m http.server 8000` (Python 3)

### Customization

#### Update Company Information
Edit the footer and contact pages with your actual:
- Company name (currently "TrustNimport")
- Email addresses (info@trustnimport.com)
- Phone numbers
- Physical address
- Business hours

**Files to update:**
- All HTML files (footer section)
- `enquiry.html` - form submission email
- `contact.html` - all contact details

#### Add Real Images
Replace placeholder images from `https://via.placeholder.com/` with your own product images:
```html
<!-- Before -->
<img src="https://via.placeholder.com/250x200?text=Neem+Oil" alt="Neem Oil">

<!-- After -->
<img src="images/neem-oil.jpg" alt="Neem Oil">
```

#### Change Product Details
Edit product specifications in `products.html`:
- Update product descriptions
- Modify specifications and details
- Change benefits and uses
- Add new products to the grid

#### Customize Colors
Edit CSS variables at the top of `styles.css`:
```css
:root {
    --primary-color: #2d5016;        /* Main brand color */
    --secondary-color: #8b7355;      /* Secondary color */
    --accent-color: #c8a574;         /* Highlight color */
    --light-bg: #f5f1ed;             /* Light background */
    /* ... more colors ... */
}
```

## Form Integration

### Current Implementation
The enquiry form uses a mailto link that opens the user's default email client. This is lightweight and doesn't require server setup.

**To change the submission email:**
Edit in `script.js`:
```javascript
window.location.href = `mailto:your-email@company.com?subject=...`;
```

### For Backend Integration (Optional)
To send form data to a backend service:

1. Create a backend endpoint (Node.js, Python, PHP, etc.)
2. Update the `submitEnquiry()` function in `script.js`:
```javascript
function submitEnquiry(data) {
    fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        showFormMessage('Thank you! We will contact you soon.', 'success');
        enquiryForm.reset();
    })
    .catch(error => {
        showFormMessage('Error submitting form. Please try again.', 'error');
    });
}
```

## SEO Optimization

The website includes:
- ✅ Meta descriptions on all pages
- ✅ Relevant keywords in meta tags
- ✅ Semantic HTML structure
- ✅ Fast page load times
- ✅ Mobile-responsive design
- ✅ Clear navigation structure
- ✅ Descriptive image alt text

## Performance Tips

1. **Optimize Images** - Use compressed images or WebP format
2. **Enable Caching** - Set up HTTP caching headers on your server
3. **Minify CSS/JS** - Reduce file sizes for production (optional)
4. **Use CDN** - Serve static files from a content delivery network

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Analytics

To add Google Analytics or other tracking:

1. Add your tracking code to each page's `<head>` section:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## Deployment

### Static Hosting Options
- **Netlify** - Easy deployment, free tier available
- **Vercel** - Fast, optimized for static sites
- **GitHub Pages** - Free with GitHub account
- **AWS S3** - Scalable, cost-effective
- **Traditional Hosting** - Any web hosting with FTP/SFTP

### Basic Steps
1. Upload all files to your hosting platform
2. Ensure all links are correct
3. Test across devices and browsers
4. Set up SSL/HTTPS (recommended)

## License & Customization

This website template is ready to customize for your specific business needs. Feel free to:
- Change colors, fonts, and layout
- Add or remove sections
- Integrate with backend services
- Add additional pages or features

## Support & Improvements

For future enhancements, consider:
- Adding a blog section
- Product comparison tool
- Customer testimonials section
- Live chat integration
- Multi-language support
- Integration with CRM systems

---

**Created for TrustNimport Import-Export Business**
Last Updated: 2024
