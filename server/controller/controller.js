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
                year: date[0],
                month: date[1],
                day: date[2]
            }
        }

        result.push(info);
    }

    res.send(result);
}

export default getYear;