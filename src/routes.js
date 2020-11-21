import loadable from '@loadable/component';
import { v1 as uuid } from 'uuid';

import Enterprise from './components/pages/Enterprise';
import Services from './components/pages/Services';
import Plumbing from './components/pages/Plumbing';
import AirConditioning from './components/pages/AirConditioning';
import Heating from './components/pages/Heating';
import Ventilation from './components/pages/Ventilation';
import Achievements from './components/pages/Achievements';
import Contact from './components/pages/Contact';

const Home = loadable(() => import('./components/pages/Home'));

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
