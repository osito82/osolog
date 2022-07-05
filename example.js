import * as logger from "./lib/logR.js";

//COPY AND PASTE EXAMPLE.JS AND MOCKDATA.JS
//TO RUN: node example.js

//HERE SOME MOKCS ARE IMPORTED
import {
  jsonObject,
  objectPerson,
  stringExample,
  arrayNumbers,
  arrayMixed,
  arrayStrings,
  noTemplateSimpleObject,
  mDimensionsArray,
  twoDimensionsArray
} from "./mockData.js";

//CONFIGURATION OBJECT
//THE OTHER DIFFERENT OPTIONS ARE COMMENTED.
//Uncommented and play with them.

const configuration = {
  logger: true,
  enableColors: true,
  string_caps: false,

  array: "default",
  //array:'default_table',
  // array:'ordered',

  multiarray: "default",
  //multiarray: "custom_table",
  //multiarray: "defualt_table",
  //multiarray:'table',

  object: "default"
  //object:'string',
  //object:'table',
};

const log = new logger.R(configuration);

//SIMPLE VARIABLES
log.R(); //ERROR IS EXPECTED
log.R(55665);
log.R(true);
log.R(stringExample, stringExample);
log.R("hola", "ce");
log.R(null, jsonObject, arrayMixed);

//Printing colorized string
log.Args({ colors: ["rainbow", "blue", "bgGreen"] }).R("batman forever");

//Printing regular object
log.R(objectPerson);

//Printing two dimensions array
log.R(twoDimensionsArray);

//Printing two dimension array with headers
log.Args({ head: ["H1", "88", "88", "88"] }).R(twoDimensionsArray);

//Printing simple array
log.R(arrayStrings);

//Printing Object using colors and "Keys" Template
log
  .Args({ colors: { key: ["red", "bgWhite"], value: ["blue", "bgWhite"] } })
  .Template({ name: "keys", date: true, title: "objectPerson" })
  .R(objectPerson);

//Printing Object using colors and "Brakets" Template
log
  .Args({ colors: { key: ["red", "bgWhite"], value: ["blue", "bgWhite"] } })
  .Template({ name: "brackets", date: true, title: "objectPerson" })
  .R(objectPerson);

//Using functions
//So far only has md5 encode
log.Funcs({ name: "md5" }, "Text to hash!");
