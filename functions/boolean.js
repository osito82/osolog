import * as misc from "../misc.js";

//checking if it is a string
const booleanConsole = (obj, config, i) => {

  if (misc.countNumberKeys(obj) >= 1) {
    if (config.boolean == "default") {
      console.log(obj[i]);
    }
  }
};

export default booleanConsole;
