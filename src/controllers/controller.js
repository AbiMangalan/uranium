const axios=require('axios');

const getWeatherInLondon = async function (req, res) {
    try 
    {
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=fee970de4efd04c133fc84695c62ad32`
        }
        let result = await axios(options)
        res.status(200).send({msg: result.data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

const getTemperatureInLondon = async function (req, res) {
    try 
    {
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=fee970de4efd04c133fc84695c62ad32`
        }
        let result = await axios(options)
        res.status(200).send({ msg: 'The current temperature in London is : '+result.data.main.temp+' K' })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

const getTemperatureInCities = async function (req, res) {
    try 
    {
        let cities=["Bengaluru","London","Mumbai","Delhi","Chennai","Kolkata","Moscow"];
        let result=[];
        for(let i=0;i<cities.length;++i)
        {
            var options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=fee970de4efd04c133fc84695c62ad32`
            };
            let tmp = await axios(options);
            let obj={city : tmp.data.name, temp : tmp.data.main.temp};
            result[i]=obj;
        }
        for(let i=0;i<result.length;++i)
        {
            for(let j=i;j<result.length;++j)
            {
                if(result[i].temp>result[j].temp)
                {
                    let tmp=result[i];
                    result[i]=result[j];
                    result[j]=tmp;
                }
            }
        }
        res.status(200).send({ data : result});
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error : err.message });
    }
};

module.exports={getWeatherInLondon,getTemperatureInLondon,getTemperatureInCities};