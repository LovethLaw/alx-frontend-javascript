/* eslint-disable */

export default class Building {
	constructor(sqft) {
		if (new.target === Building) {
			throw new TypeError('Cannot construct Building instances directly');
		}

		this.sqft = sqft;
	}

	get sqft() {
		return this._sqft;
	}

	set sqft(value) {
		if (value !== 'number') {
			throw new Error("sqft must be a number");
		}
		this._sqft = value;
	}

	evacuationWarningMessage() {
		throw new Error('Class extending Building must override evacuationWarningMessage');
	}
}