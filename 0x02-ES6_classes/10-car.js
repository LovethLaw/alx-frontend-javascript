/*eslint-disable*/
export default class Car {
  constructor(brand = undefined, motor = undefined, color = undefined) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    this._brand = brand;
  }

  set motor(motor) {
    this._motor = motor;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  cloneCar() {
    return new this.constructor();
  }
}
