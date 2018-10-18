import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free-solid';

import { Luminous } from 'luminous-lightbox';
import 'luminous-lightbox/dist/luminous-basic.css';
const element = document.querySelector('a.gallery');
if (element) new Luminous(element);

import '../sass/index.sass';
