let HardWoodTree = require('../trees/HardWoodTree');
let ConiferousTree = require('../trees/ConiferousTree');
let Forestry = require('../forestry/forestry');

let forest = new Forestry(true);
let woodtrees = [
    new HardWoodTree('maple', 3, 40, 'red'),
    new HardWoodTree('birch tree', 4, 30, 'yellow'),
];

let trees = [
    new ConiferousTree('larch', 4, 17, 'yes'),
    new ConiferousTree('pine tree', 3, 18, 'no'),
    new ConiferousTree('fir tree', 1, 15, 'no'),
];

forest.addHardWoodTreesPool(woodtrees);
forest.addConiferousTreesPool(trees);

exports.forest = forest;