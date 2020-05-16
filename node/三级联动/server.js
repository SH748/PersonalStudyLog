const express = require("express");
const body = require("body-parser");
const data = require('./city.json');
const app = express();
app.use(body.json());
app.use(body.urlencoded({
    extended: false
}));

app.listen(8000);


app.get("/chooseAddress", (req, res) => {
    res.sendFile(__dirname + "/chooseAddress.html")
});

app.post("/getcities", (req, res) => {
    let city = [];

    if (req.body.province) {
        city = Reflect.ownKeys(data[req.body.province]);
    };

    res.send({
        city
    });
})
app.post("/getdistrict", (req, res) => {
    let district = [];
    if (req.body.province && req.body.city) {
        district = data[req.body.province][req.body.city];
    };

    res.send({
        district
    });
})

app.post("/init", (req, res) => {
    let province = Reflect.ownKeys(data);
    let city = Reflect.ownKeys(data[province[0]]);
    let district = data[province[0]][city[0]];
    res.send({
        province,
        city,
        district
    });
})