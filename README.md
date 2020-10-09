# Steve Han Photography

This project shares my journey in photography with you.  It is built using React, Gatsby for static site generation, Cloudinary for media management, Netlify for deployment and and form management, and Styled Components.

## Project Folder Structure
```
├── README.md # This file.
├── package.json # npm package manager file.
├── .env.development # Contains the Cloudinary credentials for development.  (Not uploaded to Github)
├── .env.production # Contains the Cloudinary credentials for production build.  (Not uploaded to Github)
├── .gitignore # Files to ignore when uploading to Github
├── .prettierrc # Configure for VS code Prettier
├── gatsby-config # Configuration for Gatsby plugins
├── gatsby-node.js # Create pages function used to generate the individual portfolio pages
├── root-wrapper.js # Gatsby doesn't have an App.js, so this is used to wrap context API provider wrapper and global styling
├── gatsby-srr.js # Not currently used but can use instead of root-wrapper.js to wrap context provider
└── src
    ├── components
    │   ├── About.js # About me.  Currently content is typed directly in to JSX but will use markdown
    │   ├── Background.js # Display hero image that covers entire viewport using Gatsby background image plugin
    │   ├── Footer.js # Copyright and link to my dev website.
    │   ├── gallery.js # Displays the thumbnail images in justified grid layout and large images with caption in a modal lightbox
    │   ├── HamburgerIcon.js # Animated hamburger icon.
    │   ├── Hero.js # Allows user to index through the hero images
    │   ├── index.js # Exports the components for use in pages.
    │   ├── layout.js # Contains the main layout of the app - Navbar, Footer and the children that uses this component.
    │   ├── MobileMenu.js # Mobile menu.
    │   ├── Navbar.js # Navigation bar with logo and menu and social links.
    │   ├── seo.js # Uses react helmet to provide SEO metadata to all pages.
    │   ├── Title.js # Centered title in H1.
    │   └── VideoGallery.js # Video portfolio page.
    ├── content
    │   ├── markdown
    │   │   └── Will contain content to be used for About page
    │   ├── portfolios
    │   │   └── portfolios.yml - contains names & descriptions of portfolios & Cloudinary public ID & captions of images
    ├── context
    │   └── context.js # Context API currently used to hold state of whether mobile is open and used to read in submenu through GraphQL.
    ├── hooks
    │   ├── useKeyPress.js # Hook to handle keyboard presses
    │   └── useWindowDimensions # Hook to get dimensions of viewport - currently not used
    ├── images - containes all the images uploaded to Cloudinary (not uploaded to Github)
    ├── pages
    │   ├── 404.js - Error page
    │   ├── about.js - About me page.  Content in about component.
    │   ├── contact.js - Contain form with submission to Netlify.
    │   ├── index.js - Home page shows hero images.
    │   ├── portfolios.js 
    │   ├── success.js - Response to successful form submitted 
    ├── templates
    │   └── gallery-query,js - Create pages for gallery pages of each the portfolio
    └── static
        ├── FcAbout.js - Wrapper for About SVG icon
        ├── GrGallery.js - Wrapper for GrGallery SVG icon
        ├── mainBcg.jpg - Image used in case images cannot be loaded from Cloudinary
        ├── stevehan-icon.png - Image used by manifest for PWA to generate favicon
        ├── SteveHanPhotography_logo.png - Branded logo used on Navbar.  Will use SVG version of logo once ready
        └── SteveHanPhotography_white_logo.svg - SVG version of logo.  Work in progress.
```
## Resources
- [Gatsby Tutorial and Projects Course](https://www.udemy.com/course/gatsby-tutorial-and-projects-course/)
- [React styled-components v5 (2020 edition)](https://www.udemy.com/course/react-styled-components/)
- [Cloudinary Fundamentals for Developers](https://training.cloudinary.com/courses/cloudinary-fundamentals-for-developers)
