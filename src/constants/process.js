import personalInfo from './personalInfo';

const process = [
  {
    title: 'Escolha o modelo',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Solicite o orçamento',
    description: 'Lorem ipsum dolor sit amet.',
    action: {
      href: `https://wa.me/${personalInfo.tel.replace(/\D/g, '')}`,
      children: 'Whatsapp',
    },
  },
  {
    title: 'Personalize se necessário',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Realizamos sua obra completa',
    description: 'Lorem ipsum dolor sit amet.',
  },
  {
    title: 'Seu lugar perfeito está pronto para morar',
    description: 'Lorem ipsum dolor sit amet.',
  },
];

export default process;
