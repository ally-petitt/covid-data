import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://covid-19-data.p.rapidapi.com/report/totals',
  params: {date: '2020-07-21'},
  headers: {
    'x-rapidapi-key': '17bbe504b2msh10ee83209707ca0p119ba0jsn9d10df9aa5b0',
    'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// use express to build an api, and when send a get request for the graph data, make get requests...
// .. to the covid and return an array of the data so that the frontend can take that array and use it to graph