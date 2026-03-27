// AKLAN PROVINCE SEALS //
import aklanProvince from '../assets/Images/provinces/aklan/aklanProvince.png';
import altavas from '../assets/Images/provinces/aklan/altavas.png';
import banga from '../assets/Images/provinces/aklan/banga.png';
import ibajay from '../assets/Images/provinces/aklan/ibajay.png';
import kalibo from '../assets/Images/provinces/aklan/kalibo.png';
import lezo from '../assets/Images/provinces/aklan/lezo.png';
import malay from '../assets/Images/provinces/aklan/malay.png';
import nabas from '../assets/Images/provinces/aklan/nabas.png';
import newWashington from '../assets/Images/provinces/aklan/newWashington.png';
import numancia from '../assets/Images/provinces/aklan/numancia.png';
import tangalan from '../assets/Images/provinces/aklan/tangalan.png';

// ALBAY PROVINCE SEALS //
import albayProvince from '../assets/Images/provinces/albay/albayProvince.png';
import bacacay from '../assets/Images/provinces/albay/bacacay.png';
import legazpiCity from '../assets/Images/provinces/albay/legazpiCity.png';
import ligaoCity from '../assets/Images/provinces/albay/ligaoCity.png';
import malinao from '../assets/Images/provinces/albay/malinao.png';
import tabacoCity from '../assets/Images/provinces/albay/tabacoCity.png';

// ANTIQUE PROVINCE SEALS //
import sanJoseDeBuenavista from '../assets/Images/provinces/antique/sanJoseDeBuenavista.png';


export interface LGU {
  name: string;
  seal: string;
  slug: string;
}

export interface ProvinceLGUs {
  [provinceSlug: string]: LGU[];
}

export const lgus: ProvinceLGUs = {
  aklan: [
    { name: 'Aklan Province', seal: aklanProvince, slug: 'aklan-province' },
    { name: 'Altavas', seal: altavas, slug: 'altavas' },
    { name: 'Banga', seal: banga, slug: 'banga' },
    { name: 'Ibajay', seal: ibajay, slug: 'ibajay' },
    { name: 'Kalibo', seal: kalibo, slug: 'kalibo' },
    { name: 'Lezo', seal: lezo, slug: 'lezo' },
    { name: 'Malay', seal: malay, slug: 'malay' },
    { name: 'Nabas', seal: nabas, slug: 'nabas' },
    { name: 'New Washington', seal: newWashington, slug: 'new-washington' },
    { name: 'Numancia', seal: numancia, slug: 'numancia' },
    { name: 'Tangalan', seal: tangalan, slug: 'tangalan' },
  ],
  albay: [
    { name: 'Albay Province', seal: albayProvince, slug: 'albay-province' },
    { name: 'Bacacay', seal: bacacay, slug: 'bacacay' },
    { name: 'Legazpi City', seal: legazpiCity, slug: 'legazpi-city' },
    { name: 'Ligao City', seal: ligaoCity, slug: 'ligao-city' },
    { name: 'Malinao', seal: malinao, slug: 'malinao' },
    { name: 'Tabaco City', seal: tabacoCity, slug: 'tabaco-city' },
  ],
  antique: [
    { name: 'San Jose De Buenavista', seal: sanJoseDeBuenavista, slug: 'san-jose-de-buenavista' },
  ],
};
