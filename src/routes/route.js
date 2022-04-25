const express = require('express');
const controller=require('../controllers/controller');

const router = express.Router();

router.get('/test',function (req, res) 
{
    res.send('Weather API')
});

router.get('/getWeatherInLondon',controller.getWeatherInLondon);

router.get('/getTemperatureInLondon',controller.getTemperatureInLondon);

router.get('/getTemperatureInCities',controller.getTemperatureInCities);


module.exports = router;

