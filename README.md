# Portfolio Website of [REDACTED]
This is the open source repo for my portfolio website. Please feel free to add comments and suggestions on improvments.

## Employer/Client feedback
If you are an employer or potential client please leave a short review of my code, CV, GitHub repo etc. I appreciate any feedback and I am always looking to improve.

## To-Do
- ## Performance-Updates
- Lazy load below the fold components that aren't lazy loaded by Prismic
- Dynamicly import all framer motion animations to reduce bundle size
- Reduce main worker thread
  - How?
      - Web workers?
      - https://web.dev/reduce-the-scope-and-complexity-of-style-calculations/
- hCaptcha causing perfomance issues?
    - What more to do than lazy loading the component?
- Use a preloader for initial load
https://meje.dev/blog/building-a-nextjs-preloader-the-right-way

- ## Best practices
    - Why does prismic log to console?
    - hCaptcha using deprecated API? Migrate to more up to date hCaptcha component.
 
- ## Accessibility
    - Implement reduceMotion config from framer motion
 
## Features to add

- ### Functionality
- Error bounds
- Loading page
- custom 404

- ### Elements
- Design Section
- Testimonials

- ### Styling
- Project cards e.g. https://youtu.be/DCRcFf39SYo?si=tpMHINvcaXfwAPVC
- Animate projects into case studies e.g. https://codesandbox.io/s/app-store-ui-using-react-and-framer-motion-ecgc2
