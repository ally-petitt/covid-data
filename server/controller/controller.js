import axios from "axios";

// get an array of the year-long data to graph in frontend
const getYear = async (req, res) => {
    let data = [];

    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/report/totals',
        headers: {
            'x-rapidapi-key': '17bbe504b2msh10ee83209707ca0p119ba0jsn9d10df9aa5b0',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
    };

    const api_call = await axios.request(options).then(function (res) {
        data = res.data;
    }).catch(function (error) {
        console.error(error);
        res.status(404);
    });

    // prevent error from occuring
    if (data === undefined) {
        res.status(404).send({ error: "Data not found" })
        return;
    }


    let result = [];
    console.log(data.length)

    for (var i=0; i<data.length; i++) {
        let date = data[i].date.split("-")

        const info = {
            cases: data[i].confirmed,
            deaths: data[i].deaths,
            date: {
                year: parseInt(date[0]),
                month: parseInt(date[1]),
                day: parseInt(date[2])
            }
        }

        result.push(info);
    }

    res.status(201).send(result);
}

export default getYear;

export const getCountry = async(req, res) => {
    let response;

    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country',
        params: {name: req.params.country},
        headers: {
            'x-rapidapi-key': '17bbe504b2msh10ee83209707ca0p119ba0jsn9d10df9aa5b0',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
    };

    const api_call = await axios.request(options).then(function (res) {
        response = res.data[0]
    }).catch(function (error) {
        console.error(error);
    });

    if (response === undefined) {
        res.status(404).send({ error: "Country not found" })
        return;
    }

    let output = {
        country: capitalizeFirstLetter(req.params.country),
        confirmed: response.confirmed,
        recovered: response.recovered,
        critical: response.critical,
        deaths: response.deaths
    }

    res.status(201).send(output)
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getTotals = async(req, res) => {
    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/totals',
        headers: {
            'x-rapidapi-key': '17bbe504b2msh10ee83209707ca0p119ba0jsn9d10df9aa5b0',
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}