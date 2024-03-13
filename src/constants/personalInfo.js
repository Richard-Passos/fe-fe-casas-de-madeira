const personalInfo = {
  name: {
    first: 'Richard',
    last: 'Passos',
    getFull() {
      return `${this.first} ${this.last}`;
    },
  },
  email: 'hi.richardp@gmail.com',
  tel: '+55 51 9164-0693',
  job: 'Full stack developer',
  location: {
    country: 'Brazil',
    state: 'RS',
    gmt: 'GMT-3',
  },
  socials: [
    {
      href: 'https://github.com/Richard-Passos',
      icon: 'Github',
      name: 'Github',
    },
    {
      href: 'https://www.instagram.com/richardp.dev',
      icon: 'Instagram',
      name: 'Instagram',
    },
    {
      href: 'https://www.linkedin.com/in/richardp-dev',
      icon: 'Linkedin',
      name: 'Linkedin',
    },
  ],
  buyMeACoffeHref: 'https://www.buymeacoffee.com/richardp.dev',
  availabilityMessage: 'Available to work',
};

export default personalInfo;
