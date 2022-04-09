const express = require('express');

const router = express.Router();

let players=[
                {
                    "name": "manish",
                    "dob": "1/1/1995",
                    "gender": "male",
                    "city": "jalandhar",
                    "sports": ["swimming"]
                },
                {
                    "name": "gopal",
                    "dob": "1/09/1995",
                    "gender": "male",
                    "city": "delhi",
                    "sports": ["soccer"],
                },
                {
                    "name": "lokesh",
                    "dob": "1/1/1990",
                    "gender": "male",
                    "city": "mumbai",
                    "sports": ["soccer"],
                },
            ];


router.post('/players', function (req, res)
                            {
                                let in_data=req.body;
                                if(players.find(x=>x.name==in_data.name)==undefined)
                                {
                                    players.push(in_data);
                                    res.send({ data: players , status: true });
                                }
                                else
                                {
                                    res.send('Player data already exists!');
                                }
                            }
           );
module.exports = router;