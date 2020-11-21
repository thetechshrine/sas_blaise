import loadable from '@loadable/component';
import { v1 as uuid } from 'uuid';

const Home = loadable(() => import('./components/pages/Home'));
const Enterprise = loadable(() => import('./components/pages/Enterprise'));
const Services = loadable(() => import('./components/pages/Services'));
const Plumbing = loadable(() => import('./components/pages/Plumbing'));
const AirConditioning = loadable(() => import('./components/pages/AirConditioning'));
const Heating = loadable(() => import('./components/pages/Heating'));
const Ventilation = loadable(() => import('./components/pages/Ventilation'));
const Achievements = loadable(() => import('./components/pages/Achievements'));
const Contact = loadable(() => import('./components/pages/Contact'));

export default [
  { key: uuid(), path: '/accueil', component: Home },
  { key: uuid(), path: '/entreprise', component: Enterprise },
  { key: uuid(), path: '/services', exact: true, component: Services },
  { key: uuid(), path: '/services/plomberie', component: Plumbing },
  { key: uuid(), path: '/services/climatisation', component: AirConditioning },
  { key: uuid(), path: '/services/chauffage', component: Heating },
  { key: uuid(), path: '/services/ventilation', component: Ventilation },
  { key: uuid(), path: '/realisations', component: Achievements },
  { key: uuid(), path: '/contact', component: Contact }
];
