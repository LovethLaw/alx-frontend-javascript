/*eslint-disable*/
import Building from './5-building';


class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the NUMBER_OF_FLOORS floors`;
  }
}