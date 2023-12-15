import { render } from './render.js';
import Filter from './view/filter';
import Sorting from './view/sorting';
import NewEventBtn from './view/newEventBtn';
import Waypoints from './view/waypoints';
import Waypoint from './view/waypoint';
import TripInfo from './view/tripInfo';

const siteMainElement = document.querySelector('.page-main');
const headerElement = document.querySelector('.page-header');
const tripMainElement = headerElement.querySelector('.trip-main');
const filterControlsElement = tripMainElement.querySelector('.trip-controls__filters');
const contentSectionElement = siteMainElement.querySelector('.trip-events');

render(new NewEventBtn(), tripMainElement);
render(new TripInfo(), tripMainElement, 'AFTERBEGIN');
render(new Filter(), filterControlsElement);
render(new Sorting(), contentSectionElement);
render(new Waypoints(), contentSectionElement);

const waypointsElement = siteMainElement.querySelector('.trip-events__list');
render(new Waypoint(), waypointsElement);
render(new Waypoint(), waypointsElement);
render(new Waypoint(), waypointsElement);
