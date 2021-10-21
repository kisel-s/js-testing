const Tree = require('./tree');

class ConiferousTree extends Tree {
    constructor(kindOfTree, age, number, dropsNeedles) {
        super(kindOfTree, age, number);
        this.dropsNeedles = dropsNeedles;
    }

    dropsNeedles() {
        return this.dropsNeedles;
    }
}

module.exports = ConiferousTree;