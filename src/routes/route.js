const express = require('express');

const router = express.Router();

router.get('/movies', function(req, res) 
{
    let movies = ['The Shining','Incendies','Rang de Basanti','Finding Nemo'];
    res.send(movies)
});

router.get('/movies/:muvIndex', function(req, res) 
{
    let movies = ['The Shining','Incendies','Rang de Basanti','Finding Nemo'];
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
    let films = [  
        {
            "id": 1,
            'muvName': "The Shining"
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
    res.send(films);
});

router.get('/films/:id', function (req, res) 
{
    let films = [  
        {
            "id": 1,
            'muvName': "The Shining"
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
    if(req.params.id>films.length)
    {
        res.send('No movie exists with this id!');
    }
    else
    {
        res.send(films.find(x=>x.id==req.params.id));
    }
});

module.exports = router;