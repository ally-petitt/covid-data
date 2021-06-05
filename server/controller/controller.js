import axios from "axios";
import request from "request";

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
    });


    let result = [];
    console.log(data.length)

    for (var i=0; i<data.length; i++) {
        let date = data[i].date.split("-")

        const info = {
            cases: data[i].confirmed,
            deaths: data[i].deaths,
            // might have to reformat the date
            date: {
                year: parseInt(date[0]),
                month: parseInt(date[1]),
                day: parseInt(date[2])
            }
        }

        result.push(info);
    }

    res.send(result);
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
        console.log(response)
    }).catch(function (error) {
        console.error(error);
    });

    let output = {
        country: req.params.country,
        confirmed: response.confirmed,
        recovered: response.recovered,
        critical: response.critical,
        deaths: response.deaths
    }

    res.send(output)
}