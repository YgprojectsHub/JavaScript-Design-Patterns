class Component {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Leaf extends Component {
    constructor(name) {
        super(name);
    }
}

class Composite extends Component {
    constructor(name) {
        super(name);
        this.children = [];
    }

    add(component) {
        this.children.push(component);
    }

    remove(component) {
        this.children = this.children.filter(child => child !== component);
    }

    getChildren() {
        return this.children;
    }
}

const tree = new Composite('root');
const branch1 = new Composite('branch1');
const branch2 = new Composite('branch2');
const leaf1 = new Leaf('leaf1');
const leaf2 = new Leaf('leaf2');
const leaf3 = new Leaf('leaf3');

tree.add(branch1);
tree.add(branch2);
branch1.add(leaf1);
branch1.add(leaf2);
branch2.add(leaf3);

console.log(tree);

// {name: "root", children: [
//     {name: "branch1", children: ["leaf1","leaf2"]},
//     {name: "branch2", children: ["leaf3"]}
//     ]
// }
