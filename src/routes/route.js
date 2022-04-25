const express = require('express');
const controller=require('../controllers/controller');

const router = express.Router();

router.get('/test',function (req, res) 
{
    res.send('Weather API')
});

router.get('/getMemes',controller.getMemes);

router.post('/editMemes',controller.editMemes);

module.exports = router;

