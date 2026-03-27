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

// BOHOL PROVINCE SEALS //
import alburquerque from '../assets/Images/provinces/bohol/alburquerque.png';
import anda from '../assets/Images/provinces/bohol/anda.png';
import antequera from '../assets/Images/provinces/bohol/antequera.png';
import baclayon from '../assets/Images/provinces/bohol/baclayon.png';
import balilihan from '../assets/Images/provinces/bohol/balilihan.png';
import batuan from '../assets/Images/provinces/bohol/batuan.png';
import bienUnido from '../assets/Images/provinces/bohol/bienUnido.png';
import boholProvince from '../assets/Images/provinces/bohol/boholProvince.png';
import buenavista from '../assets/Images/provinces/bohol/buenavista.png';
import candijay from '../assets/Images/provinces/bohol/candijay.png';
import carlosPGarcia from '../assets/Images/provinces/bohol/carlosPGarcia.png';
import carmen from '../assets/Images/provinces/bohol/carmen.png';
import catigbian from '../assets/Images/provinces/bohol/catigbian.png';
import dagohoy from '../assets/Images/provinces/bohol/dagohoy.png';
import danao from '../assets/Images/provinces/bohol/danao.png';
import dimiao from '../assets/Images/provinces/bohol/dimiao.png';
import duero from '../assets/Images/provinces/bohol/duero.png';
import garciaHernandez from '../assets/Images/provinces/bohol/garciaHernandez.png';
import getafe from '../assets/Images/provinces/bohol/getafe.png';
import guindulman from '../assets/Images/provinces/bohol/guindulman.png';
import inabanga from '../assets/Images/provinces/bohol/inabanga.png';
import lila from '../assets/Images/provinces/bohol/lila.png';
import loay from '../assets/Images/provinces/bohol/loay.png';
import loboc from '../assets/Images/provinces/bohol/loboc.png';
import mabini from '../assets/Images/provinces/bohol/mabini.png';
import maribojoc from '../assets/Images/provinces/bohol/maribojoc.png';
import panglao from '../assets/Images/provinces/bohol/panglao.png';
import pilar from '../assets/Images/provinces/bohol/pilar.png';
import sagbayan from '../assets/Images/provinces/bohol/sagbayan.png';
import sanIsidro from '../assets/Images/provinces/bohol/sanIsidro.png';
import sanMiguel from '../assets/Images/provinces/bohol/sanMiguel.png';
import sierraBullones from '../assets/Images/provinces/bohol/sierraBullones.png';
import sikatuna from '../assets/Images/provinces/bohol/sikatuna.png';
import tagbilaranCity from '../assets/Images/provinces/bohol/tagbilaranCity.png';
import talibon from '../assets/Images/provinces/bohol/talibon.png';
import trinidad from '../assets/Images/provinces/bohol/trinidad.png';
import tubigon from '../assets/Images/provinces/bohol/tubigon.png';
import ubay from '../assets/Images/provinces/bohol/ubay.png';
import valencia from '../assets/Images/provinces/bohol/valencia.png';


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
  bohol: [
    { name: 'Alburquerque', seal: alburquerque, slug: 'alburquerque' },
    { name: 'Anda', seal: anda, slug: 'anda' },
    { name: 'Antequera', seal: antequera, slug: 'antequera' },
    { name: 'Baclayon', seal: baclayon, slug: 'baclayon' },
    { name: 'Balilihan', seal: balilihan, slug: 'balilihan' },
    { name: 'Batuan', seal: batuan, slug: 'batuan' },
    { name: 'Bien Unido', seal: bienUnido, slug: 'bien-unido' },
    { name: 'Bohol Province', seal: boholProvince, slug: 'bohol-province' },
    { name: 'Buenavista', seal: buenavista, slug: 'buenavista' },
    { name: 'Candijay', seal: candijay, slug: 'candijay' },
    { name: 'Carlos P. Garcia', seal: carlosPGarcia, slug: 'carlos-p-garcia' },
    { name: 'Carmen', seal: carmen, slug: 'carmen' },
    { name: 'Catigbian', seal: catigbian, slug: 'catigbian' },
    { name: 'Dagohoy', seal: dagohoy, slug: 'dagohoy' },
    { name: 'Danao', seal: danao, slug: 'danao' },
    { name: 'Dimiao', seal: dimiao, slug: 'dimiao' },
    { name: 'Duero', seal: duero, slug: 'duero' },
    { name: 'Garcia Hernandez', seal: garciaHernandez, slug: 'garcia-hernandez' },
    { name: 'Getafe', seal: getafe, slug: 'getafe' },
    { name: 'Guindulman', seal: guindulman, slug: 'guindulman' },
    { name: 'Inabanga', seal: inabanga, slug: 'inabanga' },
    { name: 'Lila', seal: lila, slug: 'lila' },
    { name: 'Loay', seal: loay, slug: 'loay' },
    { name: 'Loboc', seal: loboc, slug: 'loboc' },
    { name: 'Mabini', seal: mabini, slug: 'mabini' },
    { name: 'Maribojoc', seal: maribojoc, slug: 'maribojoc' },
    { name: 'Panglao', seal: panglao, slug: 'panglao' },
    { name: 'Pilar', seal: pilar, slug: 'pilar' },
    { name: 'Sagbayan', seal: sagbayan, slug: 'sagbayan' },
    { name: 'San Isidro', seal: sanIsidro, slug: 'san-isidro' },
    { name: 'San Miguel', seal: sanMiguel, slug: 'san-miguel' },
    { name: 'Sierra Bullones', seal: sierraBullones, slug: 'sierra-bullones' },
    { name: 'Sikatuna', seal: sikatuna, slug: 'sikatuna' },
    { name: 'Tagbilaran City', seal: tagbilaranCity, slug: 'tagbilaran-city' },
    { name: 'Talibon', seal: talibon, slug: 'talibon' },
    { name: 'Trinidad', seal: trinidad, slug: 'trinidad' },
    { name: 'Tubigon', seal: tubigon, slug: 'tubigon' },
    { name: 'Ubay', seal: ubay, slug: 'ubay' },
    { name: 'Valencia', seal: valencia, slug: 'valencia' },
  ],
};
