const express = require('express');
const router = express.Router();
const _ = require('lodash');
const logger = require('../logger/logger');
const helper = require('../util/helper');
const formatter = require('../validator/formatter');

router.get('/test-me', function (req, res) {
    
    res.send(logger.welcome());
    console.log(helper.printDate())
    console.log(helper.printMonth());
    console.log(helper.getBatchInfo());
    console.log(formatter.trim());
    console.log(formatter.changetoLowerCase());
    console.log(formatter.changeToUpperCase());
});

router.get('/hello', function (req, res) {
    let a1=['January','February','March','April','May','June','July','August','Septembet','October','November','December'];
    res.send(_.chunk(a1,3));
    let a2=[1,3,5,7,9,11,13,15,17,19];
    console.log("Tail Function : ",_.tail(a2,9));
    let a3=[1,2],a4=[2,3],a5=[3,4],a6=[4,5],a7=[5,6];
    console.log("Union Function : ",_.union(a3,a4,a5,a6,a7));
    console.log(_.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]));
});

module.exports = router;
// adding this comment for no reason