const axios=require('axios');

const getMemes = async function (req, res) {
    try 
    {
        var options = {
            method: "get",
            url: `http://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        res.status(200).send({msg: result.data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

const editMemes = async function (req, res) {
    try 
    {
        var options = {
            method: "get",
            url: `http://api.imgflip.com/caption_image?template_id=${req.query.template_id}&text0=${req.query.text0}&text1=${req.query.text1}&username=${req.query.username}&password=${req.query.password}`
        }
        let result = await axios(options) 
        res.status(200).send({msg: result.data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

module.exports={getMemes,editMemes};