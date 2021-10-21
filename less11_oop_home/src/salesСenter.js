const prompt = require('prompt-promise');

let forestyBuilder = require('./forestry/forestyBuilder');
let forest = forestyBuilder.forest;


(async () => {
    const kind = await prompt('Enter kind of hardWood trees: ');
    const number = await prompt('Enter number of trees: ');
    const trees = forest.woodtreesFilter(kind, number);
    trees.buyTrees(number);
    console.log(trees.toString());
    prompt.finish();
})();