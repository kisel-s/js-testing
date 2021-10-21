class Forestry {
    constructor(needConiferousTrees = false) {
        this.hardWoodTreesPool = [];
        if (needConiferousTrees) {
            this.coniferousTreesPool = [];
        }
    }
    addHardWoodTreesPool(woodtrees) {
        this.hardWoodTreesPool = [...this.hardWoodTreesPool, ...woodtrees]
    }

    addConiferousTreesPool(tree) {
        this.coniferousTreesPool = [...this.coniferousTreesPool, ...tree]
    }

    woodtreesFilter(kind, number) {
        return this.hardWoodTreesPool.find((tree) => tree.getNumber() >= number && tree.getKind() == kind);
    }
}

module.exports = Forestry;