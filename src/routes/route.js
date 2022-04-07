const express = require('express');

const router = express.Router();

const movies = ['The Shining','Incendies','Rang de Basanti','Finding Nemo'];

const films = [  
    {
        "id": 1,
        'name': "The Shining"
    }, 
    {
        "id": 2,
        "name": "Incendies"
    }, 
    {
        "id": 3,
        "name": "Rang de Basanti"
    }, 
    {
        "id": 4,
        "name": "Finding Nemo"
    }
];

router.get('/movies', function(req, res) 
{
    res.send(movies)
});

router.get('/movies/:muvIndex', function(req, res) 
{
    if(req.params.muvIndex>movies.length-1)
    {
        res.send('Invalid Index!');
    }
    else
    {
        res.send(movies[req.params.muvIndex]);
    }
});

router.get('/films', function (req, res) 
{       
    res.send(films);
});

router.get('/films/:id', function (req, res) 
{
    let result=films.find(x=>x.id==req.params.id);
    if(result==undefined)
    {
        res.send('No movie exists with this id!');
    }
    else
    {
        res.send(result);
    }
});

module.exports = router;