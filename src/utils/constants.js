import {
  BsGraphUpArrow,
  BsHandThumbsUpFill,
  BsCurrencyDollar,
  BsEnvelopeFill,
  BsFillTelephoneFill,
  BsMessenger,
  BsGeoAltFill,
} from 'react-icons/bs';

// SERVICES SECTION
export const SERVICES = [
  {
    name: 'Roof Repairs',
    price: '47,043',
    detail:
      'Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta',
    image: './r1.png',
  },
  {
    name: 'Roof Inspections',
    price: '66,353',
    detail:
      'Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat',
    image: './r2.png',
  },
  {
    name: 'Roof Cleaning',
    price: '35,853',
    detail:
      'Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten',
    image: './r3.png',
  },
  {
    name: 'Roof Coating',
    price: '47,043',
    detail:
      'Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta',
    image: './r1.png',
  },
  {
    name: 'Roof Tiling',
    price: '66,353',
    detail:
      'Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat',
    image: './r2.png',
  },
  {
    name: 'Roof Building',
    price: '35,853',
    detail:
      'Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten',
    image: './r3.png',
  },
];

// VALUE SECTION

export const VALUES = [
  {
    icon: <BsGraphUpArrow />,
    heading: 'Best interest rates on the market',
    detail:
      'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.',
  },
  {
    icon: <BsHandThumbsUpFill />,
    heading: 'Prevent unstable prices',
    detail:
      'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.',
  },
  {
    icon: <BsCurrencyDollar />,
    heading: 'Best price on the market',
    detail:
      'Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.',
  },
];

// CONTACT SECTION

export const CONTACTS1 = [
  {
    icon: <BsFillTelephoneFill size={20} />,
    titleText: 'Phone',
    description: '0452 352 546',
    buttonText: 'Call or Text Us',
  },
  {
    icon: <BsEnvelopeFill size={20} />,
    titleText: 'Email',
    description: 'roof@gmail.com',
    buttonText: 'Email Us',
  },
];
export const CONTACTS2 = [
  {
    icon: <BsMessenger size={20} />,
    titleText: 'Messenger',
    description: '021 123 145 14',
    buttonText: 'Chat with Us',
  },
  {
    icon: <BsGeoAltFill size={20} />,
    titleText: 'Location',
    description: 'Victoria, AUS',
    buttonText: 'Google Maps',
  },
];
