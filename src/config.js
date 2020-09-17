module.exports = {
  siteTitle: 'Rohith Gilla | Software Engineer',
  siteDescription:
    'Rohith Gilla is a software engineer based in India who specializes in building exceptional mobile applications, websites, and everything in between.',
  siteKeywords:
    'Rohith Gilla, Rohith, Gilla, Rohithgilla12, software engineer,gilla,rohith, front-end engineer, web developer,flutter, developer,javascript, india',
  siteUrl: 'https://gilla.tech',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-124221578-1',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Rohith Gilla',
  location: 'Boston, MA',
  email: 'gillarohith1@gmail.com',
  github: 'https://github.com/Rohithgilla12',
  twitterHandle: '@gillarohith',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Rohithgilla12',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rohithgilla',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/Rohithgilla12',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rohithgilla',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/gillarohith',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
