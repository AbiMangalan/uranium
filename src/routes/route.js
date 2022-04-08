const express = require('express');

const router = express.Router();

router.get('/arrFind1', function(req, res) 
{
    let arr=[1,2,3,4,5,7,8,9];
    let sumOfarr=0;
    let sumOFnum=45;
    console.log('A supposed array of the first 9 natural numbers : ',arr);
    for(let i=0;i<arr.length;++i)
    {
        sumOfarr+=arr[i];
    }
    console.log('Sum of all elements in the array : ',sumOfarr);
    console.log('Sum of fisrt 9 natural numbers : ',sumOFnum);
    console.log('Missing number : ',sumOFnum-sumOfarr);
    res.send('Finding the missing number in an array of numbers containing the first n natural numbers :- ');
});

router.get('/arrFind2', function(req, res) 
{
    let arr=[31,32,33,34,35,37,38,39];
    let sumOfarr=0;
    let firstNum=arr[0]-1,lastNum=arr[arr.length-1];
    let sumOfFirstNum=(firstNum*(firstNum+1))/2; //496
    let sumOfLastNum=(lastNum*(lastNum+1))/2;  //780
    let sumOFnum=sumOfLastNum-sumOfFirstNum;
    console.log('A supposed array of the first 9 natural numbers : ',arr);
    for(let i=0;i<arr.length;++i)
    {
        sumOfarr+=arr[i];
    }
    console.log('Sum of all elements in the array : ',sumOfarr);
    console.log('Sum of fisrt 9 natural numbers : ',sumOFnum);
    console.log('Missing number : ',sumOFnum-sumOfarr);
    res.send('Finding the missing number in an array of numbers containing the n natural numbers in an order :- ');
});

// const movies = ['The Shining','Incendies','Rang de Basanti','Finding Nemo'];

// const films = [  
//     {
//         "id": 1,
//         'name': "The Shining"
//     }, 
//     {
//         "id": 2,
//         "name": "Incendies"
//     }, 
//     {
//         "id": 3,
//         "name": "Rang de Basanti"
//     }, 
//     {
//         "id": 4,
//         "name": "Finding Nemo"
//     }
// ];

// router.get('/movies', function(req, res) 
// {
//     res.send(movies)
// });

// router.get('/movies/:muvIndex', function(req, res) 
// {
//     if(req.params.muvIndex>movies.length-1)
//     {
//         res.send('Invalid Index!');
//     }
//     else
//     {
//         res.send(movies[req.params.muvIndex]);
//     }
// });

// router.get('/films', function (req, res) 
// {       
//     res.send(films);
// });

// router.get('/films/:id', function (req, res) 
// {
//     let result=films.find(x=>x.id==req.params.id);
//     if(result==undefined)
//     {
//         res.send('No movie exists with this id!');
//     }
//     else
//     {
//         res.send(result);
//     }
// });

module.exports = router;