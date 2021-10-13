const express = require('express');
const request = require('request');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public'), {
    extensions: ['html']
}));

app.get('/getData', (req, res) => {
    request({url: `https://api.ipgeolocation.io/astronomy?apiKey=abd6fe44dc664d66903bda88f8a7dbee&location=Dnipro`,json:true}, (err, data) => {
       res.send({
        moonrise: data.body.moonrise,
        moonset: data.body.moonset,
        distance: data.body.moon_distance
       })
    });
});

app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
});