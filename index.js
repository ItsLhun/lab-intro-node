class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    let previousIndex = 0;
    for (let element of this.items) {
      if (item < element) {
        previousIndex = this.items.indexOf(element);
        break;
      }
      if (item == element || this.items.indexOf(element) === this.length - 1) {
        previousIndex = this.items.indexOf(element) + 1;
        break;
      }
    }
    this.items.splice(previousIndex, 0, item);
    this.length = this.items.length;
  }

  get(pos) {
    return (
      this.items[pos] ||
      (function () {
        throw new Error('OutOfBounds');
      })()
    );
  }

  max() {
    return this.items[this.length - 1] || this.emptyListError();
  }

  min() {
    return this.items[0] || this.emptyListError();
  }

  sum() {
    return this.items.reduce((acc, elem) => acc + elem, 0);
  }

  avg() {
    return this.length == 0 ? this.emptyListError() : this.sum() / this.length;
  }

  emptyListError() {
    throw new Error('EmptySortedList');
  }
  print() {
    console.log(this.items);
  }
}

module.exports = SortedList;
