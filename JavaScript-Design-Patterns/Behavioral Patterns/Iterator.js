class Iterator {
    constructor(items) {
        this.index = 0;
        this.items = items;
    }

    next() {
        return this.items[this.index++];
    }

    hasNext() {
        return this.index < this.items.length;
    }
}

const items = ['item1', 'item2', 'item3'];
const iterator = new Iterator(items);

while (iterator.hasNext()) {
    console.log(iterator.next());
}
