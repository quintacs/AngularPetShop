
const PROX_CONFIG = [
  {
    context:['/api'],
    target:'http://localhost:8080/',
    source: false,
    logLevel:'debug'
  }
];
module.exports = PROX_CONFIG;

/*return {
  "/api" : {
    "target": "http://192.168.0.11:8080/",
    "secure": false,
    "changeOrigin":true,
    "logLevel":"debug",
    "pathRewrite":{
        "ˆ/api":""
    }
  }
}*/
/*
const PROX_CONFIG = [
  {
    context:['/api'],
    target:'http://192.168.0.3:8080/',
    source: false,
    logLevel:'debug'
  }
];*/



