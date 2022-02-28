const {chain} = require('bottender');
const RuleBased = require('./ruleBased.chain.routes.js')
const MachineLearningBased = require('./machineLearn.chain.routes.js')
const HumanAgent = require('./humanAgent.chain.routes.js')

 module.exports = chain([
    // execute in the following order
    RuleBased,
    MachineLearningBased,
    HumanAgent,
  ]);
