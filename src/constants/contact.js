import personalInfo from './personalInfo';

const contact = [
  {
    title: 'Email',
    href: `mailto:${personalInfo.email}`,
    data: personalInfo.email,
  },
  {
    title: 'Telefone',
    href: `https://wa.me/${personalInfo.tel.replace(/\D/g, '')}`,
    data: personalInfo.tel,
  },
];

export default contact;
