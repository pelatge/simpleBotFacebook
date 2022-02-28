const {chain} = require('bottender')
const routes = require('./routes')
//const actions= require('./actions')
 module.exports = async function App(context){
  if (process.env.DEV) {
    console.log(context.event.rawEvent);
  }
  return chain([routes,/* actions*/]);
};


