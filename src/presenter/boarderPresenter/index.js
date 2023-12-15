import { render } from '../../render.js';
import Sorting from '../../view/sorting';
import Waypoints from '../../view/waypoints';
import FormEdit from '../../view/form-edit';
import Waypoint from '../../view/waypoint';

export default class BoarderPresenter {
  sortComponent = new Sorting();
  listComponent = new Waypoints();

  constructor(container) {
    this.container = container;
  }

  init() {
    render(this.sortComponent, this.container);
    render(this.listComponent, this.container);
    render(new FormEdit(), this.listComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new Waypoint(), this.listComponent.getElement());
    }
  }
}
