# Ootahgonah - A Healing Portal of Love & Light ✨

![Vercel](https://img.shields.io/badge/Vercel-Deployed-00C853?style=flat&logo=vercel)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![AngularJS](https://img.shields.io/badge/AngularJS-E23237?style=flat&logo=angularjs&logoColor=white)

A mystical and serene healing portal designed to provide a sanctuary of peace, love, and spiritual wellness. This web application features beautiful cosmic backgrounds, ethereal animations, and a calming user interface that promotes inner healing and spiritual growth.

 
## 🌟 Features

- **Mystical Interface**: Beautiful cosmic backgrounds with floating particle animations
- **Healing Experience**: Designed with spiritual wellness and healing in mind
- **Responsive Design**: Optimized for all devices and screen sizes
- **Ethereal Aesthetics**: Forest & sky healing color palette with smooth animations
- **Spiritual Content**: Portal for love, light, and healing energies
- **Multiple Versions**: Various iterations of the interface (V1-V6) for evolution tracking

## 🚀 One-Command Deployment with Vercel

This project is configured as a **Vercel plugin** for instant deployment. Deploy your healing portal with a single command:

```bash
npx vercel
```

That's it! Your healing portal will be live on the web in seconds.

### Alternative Deployment Methods

#### Using Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy with one command
vercel
```

#### Using GitHub Integration
1. Connect your repository to Vercel
2. Push changes to your main branch
3. Automatic deployment happens instantly

#### Manual Deployment
```bash
# Clone the repository
git clone <your-repo-url>
cd m-web

# Deploy to Vercel
vercel --prod
```

## 🛠️ Project Structure

```
m-web/
├── index.html              # Main entry point
├── V6.html                 # Latest version (production)
├── V1.html - V5.html       # Version history
├── app.js                  # Main application logic
├── styles.css              # Global styles
├── package.json            # Project configuration
├── vercel.json             # Vercel deployment config
├── assets/                 # Static assets
│   └── images/            # Image files
├── controllers/           # AngularJS controllers
│   └── mainController.js  # Main app controller
├── directives/           # Custom directives
│   └── cosmicBackground.js # Cosmic animation directive
└── services/             # Application services
    └── dataService.js    # Data management service
```

## 🔧 Configuration

### Vercel Configuration (`vercel.json`)
The project includes a pre-configured `vercel.json` file that:
- Builds by copying `V6.html` to `index.html`
- Serves static files from the root directory
- Requires no dependencies or build process

### Environment Setup
No environment variables or complex setup required! This is a static site optimized for immediate deployment.

## 🎨 Versions

- **V1-V5**: Development iterations and design evolution
- **V6**: Current production version with full feature set
- **V6-compressed**: Optimized version for faster loading
- **V6-S3-ready**: AWS S3 compatible version

## 🌈 Color Palette

The healing portal uses an ethereal color scheme:
- **Forest Emerald**: `#2D5A27` - Grounding and stability
- **Misty Teal**: `#4A9B8B` - Emotional healing
- **Cloud Silver**: `#E8F4F8` - Purity and clarity
- **Dawn Purple**: `#8E44AD` - Spiritual awakening
- **Golden Sunbeam**: `#F39C12` - Joy and vitality
- **Soft Lavender**: `#D1C4E9` - Peace and tranquility

## 🚀 Getting Started

### For Users
Simply visit the deployed URL to experience the healing portal.

### For Developers

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd m-web
   ```

2. **Serve locally** (optional)
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Deploy to Vercel**
   ```bash
   vercel
   ```

## 🔄 Development Workflow

1. Make changes to `V6.html` or other project files
2. Test locally using any static server
3. Commit your changes
4. Deploy with `vercel` or push to trigger auto-deployment

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🙏 Spiritual Intention

This portal is created with the intention of:
- Providing a digital sanctuary for healing
- Spreading love and light through technology
- Supporting spiritual growth and wellness
- Creating a peaceful online space

## 📄 License

MIT License - Feel free to use this healing portal to spread love and light.

## 🌟 Contributing

We welcome contributions that align with the healing and spiritual purpose of this portal:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🆘 Support

For support, questions, or spiritual guidance related to this portal:
- Open an issue in this repository
- Reach out to the Ootahgonah Team

---

*May this portal bring healing, love, and light to all who visit.* ✨🙏✨
