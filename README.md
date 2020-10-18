# Steve Han Photography

This project is a web application that shares my journey in photography, which spans from travel to dance music to fashion and lifestyle to my commercial work such as food and drinks to coverage of technology events such as conferences, meetups and hackathons.  It is built using React/javascript, Gatsby for static site generation, GraphQL, Cloudinary for responsive media management, Netlify for deployment and form management, Styled Components for styling, Google Analytics and Tag Manager.  I've optimized it for SEO, at least from a developer's viewport. (i.e. since it's an image based website the pages won't have the 900+ words that is optimal for SEO and more time can be spent finding keywords.)


## Project Folder Structure
<details>
    <summary>View project folder structure with description</summary>

```
├── README.md # This file.
├── package.json # npm package manager file.
├── .env.development # Contains the Cloudinary credentials for development.  (Not uploaded to Github)
├── .env.production # Contains the Cloudinary credentials for production build.  (Not uploaded to Github)
├── .gitignore # Files to ignore when uploading to Github
├── .prettierrc # Configurations for VS code Prettier code formatter
├── gatsby-browser.js # # Gatsby doesn't have an App.js, so this is used to wrap context API provider wrapper and global styling
├── gatsby-config # Configuration for Gatsby plugins
├── gatsby-node.js # Create pages function used to generate the individual portfolio pages
└── src
    ├── components
    │   ├── About.js # Displays the contents for about me
    │   ├── Background.js # Displays a hero image that covers entire viewport using Gatsby background image plugin
    │   ├── Footer.js # Shows the copyright info and link to my dev website
    │   ├── gallery.js # Displays the thumbnail images in a justified grid layout and images with caption in a modal lightbox
    │   ├── HamburgerIcon.js # Animated hamburger icon that is used to open and close mobile menu
    │   ├── Hero.js # Contains the controls for user to select the hero images to display
    │   ├── index.js # Exports the components for use in pages
    │   ├── layout.js # Contains the main layout of the app - Navbar, Footer and the children that uses this component.
    │   ├── MobileMenu.js # Mobile menu
    │   ├── Navbar.js # Navigation bar with logo and menu and social links
    │   ├── seo.js # Uses react helmet to provide SEO metadata to all pages
    │   ├── Title.js # Centered title in H1 tag
    │   └── VideoGallery.js # Video portfolio page
    ├── content
    │   ├── markdown
    │   │   └── about.md # Contains the contents of About page
    │   └── portfolios
    │       └── portfolios.yml # Contains all the names & descriptions of portfolios & Cloudinary public ID & captions of images
    ├── context
    │   └── context.js # Context API currently used to hold state of whether mobile is open and used to read in submenu through GraphQL
    ├── hooks
    │   ├── useKeyPress.js # Hook to handle keyboard presses
    │   └── useWindowDimensions # Hook to get dimensions of viewport - currently not used
    ├── images # contains all the images uploaded to Cloudinary (not uploaded to Github)
    ├── pages
    │   ├── 404.js # Error page
    │   ├── about.js # About me page.  Gets the content from markdown file and passes it to the About component
    │   ├── contact.js # Contain form with submission to Netlify.
    │   ├── index.js # Home page shows hero images.
    │   ├── portfolios.js # Fetches and displays the 1st image from each portfolio and link to its corresponding gallery page
    │   ├── success.js # Response to successful form submitted 
    ├── templates
    │   └── gallery-query.js # Create pages for gallery pages of each the portfolio
    └── static
        ├── FcAbout.js # Wrapper for About SVG icon
        ├── GrGallery.js # Wrapper for GrGallery SVG icon
        ├── main.jpg # Open Graph (OG) image
        ├── mainBcg.jpg # Image used in case images cannot be loaded from Cloudinary
        ├── stevehan-icon.png # Image used by manifest for PWA to generate favicon
        ├── SteveHanPhotography_logo.png # Branded logo used on Navbar.  Will use SVG version of logo once ready
        └── SteveHanPhotography_white_logo.svg # SVG version of logo.  Work in progress
```
</details>

## License
Proprietary.  All rights reserved.

## Resources
- [Gatsby Tutorial and Projects Course](https://www.udemy.com/course/atsby-tutorial-and-projects-course/)
- [React styled-components v5 (2020 edition)](https://www.udemy.com/course/react-styled-components/)
- [Cloudinary Fundamentals for Developers](https://training.cloudinary.com/courses/cloudinary-fundamentals-for-developers)
