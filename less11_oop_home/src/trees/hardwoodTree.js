const Tree = require('./tree');

class HardWoodTree extends Tree {
    constructor(kindOfTree, age, number, leafСolor) {
        super(kindOfTree, age, number);
        this.leafСolor = leafСolor;
    }

    getLeafСolor() {
        return this.leafСolor;
    }

    toString(){
        return `The trees '${this.kindOfTree}' have age '${this.age}' and number '${this.number}'`
    }
}

module.exports = HardWoodTree;