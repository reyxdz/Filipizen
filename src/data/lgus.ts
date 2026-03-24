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

export interface LGU {
  name: string;
  seal: string;
  slug: string;
  transactions?: string[];
}

export interface ProvinceLGUs {
  [provinceSlug: string]: LGU[];
}

export const lgus: ProvinceLGUs = {
  aklan: [
    { name: 'Aklan Province', seal: aklanProvince, slug: 'aklan-province', transactions: ['Real Property', 'Payment Order'] },
    { name: 'Altavas', seal: altavas, slug: 'altavas', transactions: ['Business', 'Real Property', 'Civil Registry'] },
    { name: 'Banga', seal: banga, slug: 'banga', transactions: ['Business', 'Real Property', 'Building Permit'] },
    { name: 'Ibajay', seal: ibajay, slug: 'ibajay', transactions: ['Local Taxes', 'Market Fees'] },
    { name: 'Kalibo', seal: kalibo, slug: 'kalibo', transactions: ['Business', 'Real Property', 'Local Taxes', 'Traffic Violations'] },
    { name: 'Lezo', seal: lezo, slug: 'lezo', transactions: ['Real Property', 'Civil Registry'] },
    { name: 'Malay', seal: malay, slug: 'malay', transactions: ['Business', 'Real Property', 'Environmental Fee'] },
    { name: 'Nabas', seal: nabas, slug: 'nabas', transactions: ['Business', 'Real Property'] },
    { name: 'New Washington', seal: newWashington, slug: 'new-washington', transactions: ['Business', 'Payment Order'] },
    { name: 'Numancia', seal: numancia, slug: 'numancia', transactions: ['Real Property', 'Building Permit'] },
    { name: 'Tangalan', seal: tangalan, slug: 'tangalan', transactions: ['Business', 'Real Property', 'Local Taxes'] },
  ],
};
