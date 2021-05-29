import axios from "axios";

const getYear = (req, res) => {
    let data = [];

    const options = {
    method: 'GET',
    url: 'https://covid-19-data.p.rapidapi.com/report/totals',
    headers: {
        'x-rapidapi-key': '17bbe504b2msh10ee83209707ca0p119ba0jsn9d10df9aa5b0',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (res) {
    data = res.data;

    }).catch(function (error) {
    console.error(error);
    });

    res.send("yearly");
}

export default getYear;