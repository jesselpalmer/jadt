export default class HashSet {
  constructor() {
    this.values = {};
  }

  add(val) {
    this.values[val] = true;
  }

  clear() {
    this.values = {};
  }

  has(val) {
    return this.values[val] === true;
  }

  getValues() {
    return Object.keys(this.values);
  }

  remove(val) {
    delete this.values[val];
  }

  size() {
    return this.getValues().length;
  }
}
