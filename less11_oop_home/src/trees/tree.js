class Tree {
    constructor(kindOfTree, age, number) {
        this.kindOfTree = kindOfTree;
        this.age = age;
        this.number = number;
    }

    buyTrees(number) {
        this.number = this.number - number;
    }

    getKind() {
        return this.kindOfTree;
    }

    getNumber() {
        return this.number;
    }
}

module.exports = Tree;