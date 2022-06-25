import * as misc from "../misc.js";

//checking if it is an array

const objectConsole = (obj, config, i) => {
  if (misc.countNumberKeys(obj) >= 1) {
    if (config.object == "default") {
      console.log(obj[i]);
    } else if (config.object == "table") {
      console.table(obj[i]);
    } else if (config.object == "string") {
      console.log(JSON.stringify(obj[i]));
    }
  }
};

export default objectConsole;

//notes:
//config is this.config
